import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data Science</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Python (NumPy, Pandas)</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Data Visualization (Matplotlib, Seaborn)</h3>
                        <span className="skills__level">Advance</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Machine Learning (Scikit-learn, TensorFlow)</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Statistical Analysis</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">SQL, NoSQL Databases</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Big Data (e.g., Apache Spark)</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
</div>
  )
}

export default Backend