using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class УправлениеЗадачамиКлиентПереопределяемый
	{
		// Функция пытается выполнить задачу и возвращает Ложь, если отсутствует алгоритм для задачи
		//

		public object ВыполнитьЗадачи(/*ВидЗадачи, ОбъектЗадачи, ДатаЗадачи*/)
		{
			return null;
		}
		// Функция возвращает тип реквизита ОбъектЗадачи в зависимости от вида задачи
		//

		public object ВернутьТипОбъектаЗадачи(/*ВидЗадачи*/)
		{
			return null;
		}
	}
}
