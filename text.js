module.exports = `
CS4065: MMSR Analytics 2016

Scalable and reliable multi-modal retrieval
for music search and recommendation
Proposal summary
Various techniques are used for Music Information Retrieval (MIR) to retrieve information from
music. Most techniques have difficulties with scalability, making them less functional for large
datasets. Music search and recommendation (MSR) is a field within MIR that concerns giving good
recommendations about music to the user, based on their previous preferences. Solutions that make
MSR more scalable have already been explored, but are lacking the aspect of multi-modality.
Furthermore, multi-modality has been shown to be able to improve the accuracy of MIR.
Our goal is to increase the accuracy of this field while preserving the ability to scale the dataset. This
will be done using multi-modal MIR to provide the added accuracy and indexing to preserve the
scalability. The indexing makes it possible to search for a song based on different features, while
multi-modality provides improved accuracy over uni-modal MIR techniques. Combining these
techniques will result in a scalable and accurate MSR system.
In order to produce verifiable results, the Million Song dataset is used to provide a multi-modal
dataset as well as a ground truth for the verification of the improved accuracy of MIR techniques. This
effectively measures how well the semantic gap is bridged. Additionally, the resulting solution is
expected to aid in bridging the intention gap by provided a multi-modal query interface to the users of
the MSR system. This is verified by means of a user study comparing the accuracy of the MSR results
to existing accurate services such as Pandora.
Keywords​: multi-modal retrieval, indexing, hashing, scalability, music search & recommendation,
indices, music information retrieval

Problem description
The field of music information retrieval (MIR) provides a growing number of techniques to retrieve
information from music. These techniques give us information about features of music on different
levels. Two examples of these techniques are ​audio fingerprinting and ​cover song identification which
are used to retrieve or identify the same fragment of a given music recording and to identify different
versions of the same song respectively [1]. However most of these methods come with a significant
overhead in terms of processing time.
Use of the information obtained from these techniques in combination with a set of constraints
provides a basis for the field music search and recommendation (MSR). Similar music is found by
comparing different features to some kind of seed, e.g. a query or a piece of content that the music
should be similar to. Ideally, finding this similar music should be reliable and efficient.

1

CS4065: MMSR Analytics 2016

Both these fields also aim to address a fundamental gap. MIR is concerned with bridging the semantic
gap between the way a user sees content and how the system identifies it. MSR deals with the
intention gap between the constraints and what a user would actually like to see. Existing solutions to
both of these problems could be improved by taking into account multi-modality. In order to ensure
the resulting solution is and remains efficient, a focus on scalability is paramount. A multi-modal
approach is not yet seen as a solution to this problem. By including multi-modality, we would like to
better bridge these fundamental gaps while keeping the solution efficient and reliable at every scale.

Previous work
Insights into the high variety in concepts in MIR can be combined to formulate a more efficient
approach. Using different aspects of these concepts in a new approach will improve the accuracy of
MIR techniques, the accuracy of MSR results and it will better bridge the semantic and intention gap.
So first MSR can be seen as building a playlist from some set of musical pieces based on a certain
constraints. According to Aucouturier & Pachet[2], building optimal playlists based on multiple
constraints is a finite-domain constraints satisfaction problem and therefore an NP-hard problem. As
such, solutions to this problem often suffer from lack of scalability.
Research that investigates the scalability was done by Cai et al. [3]. They propose
recommendation-by-search as a scalable solution to the finite-domain constraint problem. They
transform music pieces to sequences of music signatures, which are consequently indexed based on a
scale-sensitive hashing function. The appropriate musical feature parameters used for the indexing are
automatically selected based on the scale of the dataset, such that the number of nearest neighbors is
optimal. Nonetheless they ‘mainly focus on the problem of acoustic-based music recommendation,
and leave the multi-modality recommendation problem as future work’ .
Kurth & Muller [4] propose a practical and efficient index-based audio matching algorithm for
medium-sized data sets while providing high-quality audio matches. In ongoing research they have
been working to integrate their algorithm into an advanced audio player for multimodal presentation,
browsing and retrieval of music data. This shows potential regarding multi-modal indexing.
Multi-modality improves the accuracy of music emotion classification, which is found by Yang et al.
[5]. Their emotion classification accuracy increased from 46.6% to 57.1% when using a multi-modal
approach to music emotion classification. They argue the presence of a semantic gap fundamentally
limits the performance of uni-modal categorical music emotion classification.
Shao [6] compares the effectiveness of multi-modal methods and uni-modal methods and presents a
prototype system for multi-modal music information retrieval for the purposes of music
recommendation.

Scientific contribution
Due to technological advancements over the last 20 years, an enormous amount of data has become
available. This is also the case for music, due to old music being digitized and new music being
2

CS4065: MMSR Analytics 2016

invented. A lot of research is done on music because it plays a huge role in human life. Researchers
try to find patterns in music to connect and compare different pieces but also to know how the mind of
people works concerning music. However, with a growing number of techniques and a growing
amount of data, it is becoming difficult to keep solutions scalable while improving the accuracy of
recommendations. By combining different known methods into a new approach, the overall scalability
can be improved and the results will show a higher accuracy. The use of multi-modality in different
scientific fields indicates academic interest in the subject. This demonstrates a niche in the current
academic research climate and any significant contributions regarding multi-modality is relevant.
Another aspect of our proposal is about improving bridging the semantic gap and the intention gap,
which are fundamental limitations when it comes to MIR and MSR. Any significant contributions on
how to bridge these gaps and so do more efficiently are inherently valuable.
Since the MSR problem boils to a finite-dimension constraints satisfaction problem, it is NP-hard.
This makes it fundamentally difficult for solutions to the problem to scale well. Contributions on
improving these solutions with preserving scalability are substantial.
When these aspects are improved, better and faster results can be obtained in the MIR and MSR. Not
only is this beneficial for research in the future, which can be done faster and more accurately, it also
benefits users of MSR systems directly becauses it produces better results faster.

Scientific challenges and objectives
As becoming clear from the previous work, many different approaches have been researched when it
comes to MIR and MSR. MSR engines can be efficient, reliable and scalable [3, 4], at least in the case
of uni-modality. Multi-modality can be used to improve accuracy in bridging the semantic gap [5] and
our expectation is that it will also aid in bridging the intention gap. Furthermore, a case study and a
working prototype of a multi-modal music recommendation system show the feasibility of the concept
in practice.
As such, the challenge is to combine these results into a reliable, efficient and scalable music search
and recommendation system. The requirements for such a system are as follows:
- It needs to be efficient at different sizes of dataset, effectively constituting scalability.
- The dataset should be indexed with a multi-modal based on multi-modal music signatures.
- The resulting solution should be verifiably efficient at every scale and more accurate
compared to a uni-modal solution.
- The bridging of the semantic and the intuition gap should be done verifiably better. The user
experience of the multi-modal query interface relates to the bridging of the intuition gap and
the quality of the results translate to the bridging of the semantic gap.
With the combination of multiple approaches, it needs to be taken into consideration how each part
improves the results. With this in mind, it would be of great importance to monitor the different
aspects separately. Difficulties can be found here regarding the different evaluation methods. The
indexing would be tested in a different way than the multi-modality part.

3

CS4065: MMSR Analytics 2016

Methodology and project organization
The dataset consists of songs and metadata about songs and be multi-modal. According to [8], the
dataset already covers audio data and lyrics, making it suitable for multi-modal purposes.
Additionally, Shao [6] suggests the use of a web-crawler to automatically collect music data. Using a
web-crawler, the Million Song dataset could be amended to be more representative for our purposes.
The resulting solution should be scalable. To show this is true, datasets of different sizes are required
in order to verify the efficiency of the solution on datasets of different sizes. This can be achieved
easily by making use of the Million Song Dataset [7]. The size of the dataset qualifies it to be large
and subsets of this data can be used to provide smaller datasets.
In order to provide scalability, the multi-modal data is presented as a list of features and indexed to
make it quickly searchable. An hashing function is needed in order to map the musical signatures for
the purposes of indexing. The function should ensure each musical feature is also indexed separately
to make it possible for any feature to serve as a starting point. Cai et al. [3] use locality sensitive
hashing (LSH) for this purpose since they would like to be able to find a song based on any fragment
from it. This is suitable for our purposes as well.
For the system to take full advantage of the multi-modality of our dataset, the query interface should
facilitate multi-modality as well. Furthermore, if querying should be possible with any feature as a
starting point, the query interface can facilitate MIR on the fly and start from the musical features that
are least expensive to compute. This provides incrementally more accurate results while preserving
efficiency.
Finally, to be able to verify the performance of the system, some kind of ground truth is needed. The
Million Song dataset is a commonly used method as a reference dataset for evaluating research [7].
The core of the dataset is the feature analysis and metadata for one million songs. As such, the dataset
can serve as a ground truth for the verification of the accuracy of multi-modal MIR techniques.
Additionally, the accuracy of the MSR part of the system should be verified as well. Cai et al. [3]
perform a qualitative analysis by conducting a small scale user study. They use Pandora
recommendations as a qualitative ground since the system is based on data annotated by experts. This
would a suitable to verify the quality of the multi-modal MSR system.

References
[1]: Foundations and TrendsR in Information Retrieval Vol. 8, No. 2-3 (2014) 127–261 2014 M.
Schedl , E. Gómez and J. Urbano DOI: 10.1561/1500000042
[2]: Aucouturier, J., & Pachet, F. (2002). Scaling up music playlist generation. ​Multimedia and
Expo, 2002. ICME’​. Retrieved from h​ ttp://ieeexplore.ieee.org/abstract/document/1035729/
[3]: Cai, R., Zhang, C., Zhang, L., & Ma, W. (2007). Scalable music recommendation by search.
Proceedings of the 15th ACM​. Retrieved from ​http://dl.acm.org/citation.cfm?id=1291466
[4]: Kurth, F., & Muller, M. (2008). Efficient index-based audio matching. ​IEEE Transactions on
Audio, Speech, and​. Retrieved from http://ieeexplore.ieee.org/abstract/document/4432645/
4

CS4065: MMSR Analytics 2016

[5]: Yang, Y., Lin, Y., Cheng, H., Liao, I., & Ho, Y. (2008). Toward multi-modal music emotion
classification.
​Advances
in
Multimedia​.
Retrieved
from
http://www.springerlink.com/index/q323m1014277u511.pdf
[6]: Shao, B. (2011). User-centric music information retrieval. Retrieved from
http://digitalcommons.fiu.edu/etd/416/?utm_source=digitalcommons.fiu.edu%2Fetd%2F416
&utm_medium=PDF&utm_campaign=PDFCoverPages
[7]: Bertin-Mahieux, T., Ellis, D. P., Whitman, B., & Lamere, P. (2011, October). The Million
Song Dataset. In ISMIR (Vol. 2, No. 9, p. 10).

5
`;
