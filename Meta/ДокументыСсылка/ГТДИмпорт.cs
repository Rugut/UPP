
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ) Таможенная декларация по импорту
	///</summary>
	public partial class ГТДИмпорт:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		public V82.СправочникиСсылка.НомераГТД НомерГТД;//Номер ГТД
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсДокумента;//Курс документа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьДокумента;//Кратность документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента;//Валютный депозит
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов;//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов;//Кратность взаиморасчетов
		///<summary>
		///(Общ) договор контрагента с таможней, по которому взаиморасчеты осуществляются в валюте регл. учета
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагентаРегл;//Депозит на таможне (руб.)
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете;//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ) Таможенный сбор в валюте взаиморасчетов с таможней
		///</summary>
		public decimal/*(15.2)*/ ТаможенныйСборВал;//Таможенный сбор валютный
		///<summary>
		///(Общ) Таможенный сбор в валюте регламентированного учета
		///</summary>
		public decimal/*(15.2)*/ ТаможенныйСбор;//Таможенный сбор
		///<summary>
		///(Общ) Штраф от таможни в валюте взаиморасчетов с таможней
		///</summary>
		public decimal/*(15.2)*/ ТаможенныйШтрафВал;//Таможенный штраф в валюте
		///<summary>
		///(Общ) Штраф от таможни в валюте регламентированного учета
		///</summary>
		public decimal/*(15.2)*/ ТаможенныйШтраф;//Таможенный штраф
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСКонтрагентом;//Счет учета расчетов с таможней
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовРасходов;//Статья прочих доходов расходов
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасходовБУ;//Счет учета расходов по штрафам (БУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасходовНУ;//Счет учета расходов по штрафам (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСКонтрагентомВал;//Счет учета расчетов с таможней (вал.)
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовРасходовВал;//Статья прочих доходов расходов (вал.)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасходовБУВал;//Счет учета расходов по штрафам (БУ) (вал.)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасходовНУВал;//Счет учета расходов по штрафам (НУ) (вал.)
		public object Проект;
	}
}