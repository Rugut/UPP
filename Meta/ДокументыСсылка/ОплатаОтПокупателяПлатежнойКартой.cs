
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class ОплатаОтПокупателяПлатежнойКартой:ДокументСсылка
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
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение;
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОплатаОтПокупателяПлатежнойКартой ВидОперации;//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент;//Контрагент, подотчетник, касса ККМ
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента;//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public object ДокументОснование;//Документ основание
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
		///Номер чека на фискальном регистраторе
		///</summary>
		public decimal/*(8)*/ НомерЧекаККМ;//Номер чека ККМ
		public V82.СправочникиСсылка.ДоговорыЭквайринга ДоговорЭквайринга;//Договор эквайринга
		public V82.СправочникиСсылка.Контрагенты Эквайрер;
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорВзаиморасчетовЭквайрера;//Договор взаиморасчетов эквайрера
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Валюта документа
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСЭквайрером;//Счет учета расчетов с эквайрером
		public V82.СправочникиСсылка.ВидыОплатЧекаККМ ВидОплаты;//Вид оплаты
		public decimal/*(5.2)*/ ПроцентТорговойУступки;//Процент торговой уступки
		public decimal/*(15.2)*/ СуммаТорговойУступки;//Сумма торговой уступки
	}
}