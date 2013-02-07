
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
	public partial class ПоступлениеТоваровИзПереработки:ДокументСсылка
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
		public bool АвтораспределениеМатериалов;//Автоматически распределять материалы на продукцию
		///<summary>
		///(Общ)
		///</summary>
		public bool АвтораспределениеПрочихЗатрат;//Автоматически распределять прочие затраты на продукцию
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента;//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public bool ВводитьСтатьиЗатратПоСтрокам;//Вводить статьи затрат по строкам
		///<summary>
		///(Общ) Вид поступления: на склад или по ордеру
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыПоступленияТоваров ВидПоступления;//Вид поступления
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента;//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		public V82.ДокументыСсылка.ЗаказПоставщику Заказ;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент;
		///<summary>
		///(Общ) 
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов;//Кратность взаиморасчетов
		///<summary>
		///(Общ) 
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов;//Курс взаиморасчетов
		///<summary>
		///(Регл)
		///</summary>
		public bool НДСВключенВСтоимость;//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете;//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение;
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации;//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		public object СкладОрдер;//Склад ордер
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат;//Статья затрат по умолчанию
		///<summary>
		///(Общ)
		///</summary>
		public bool СуммаВключаетНДС;//Сумма включает НДС
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовПоТаре;//Счет учета расчетов по таре
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен;//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		public bool УчитыватьНДС;//Учитывать НДС
		public bool ИспользоватьЗаказы;//Использовать заказы
		public bool ИспользоватьМатериалы;//Использовать материалы
		public bool ИспользоватьПрочиеЗатраты;//Использовать прочие затраты
		///<summary>
		///(Общ)
		///</summary>
		public bool АвтораспределениеВозвратныхОтходов;//Автоматически распределять возвратные отходы на продукцию
		public bool ИспользоватьВозвратныеОтходы;//Использовать возвратные отходы
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Склады СкладОтходов;//Склад отходов
	}
}