
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
	public partial class ПринятиеКУчетуОС:ДокументСсылка
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПринятияКУчетуОсновныхСредств ВидОперации;//Вид операции
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(4.2)*/ ГодоваяНормаАмортизацииБУ;//Годовая норма амортизации БУ
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(4.2)*/ ГодоваяНормаАмортизацииУУ;//Годовая норма амортизации УУ
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ГодовыеГрафикиАмортизацииОС ГрафикАмортизацииПоГодуБУ;//График амортизации по году (БУ)
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ГодовыеГрафикиАмортизацииОС ГрафикАмортизацииПоГодуУУ;//График амортизации по году (УУ)
		public DateTime ДатаПриобретения;//Дата приобретения
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ИндивидуальныеГрафикиАмортизации ИндивидуальныйГрафикАмортизации;//Индивидуальный график амортизации
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(6.2)*/ КоэффициентУскоренияБУ;//Коэффициент ускорения (БУ)
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(6.2)*/ КоэффициентУскоренияУУ;//Коэффициент ускорения (УУ)
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ФизическиеЛица МОЛБУ;//МОЛ (БУ)
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ФизическиеЛица МОЛУУ;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации НаправлениеСписанияПриПринятииКУчету;//Направление списания при принятии к учету
		///<summary>
		///(Регл)
		///</summary>
		public bool НачислятьАмортизациюБУ;//Начислять амортизацию (БУ)
		///<summary>
		///(Упр)
		///</summary>
		public bool НачислятьАмортизациюВТекущемМесяце;//Начислять амортизацию в текущем месяце
		///<summary>
		///(Регл)
		///</summary>
		public bool НачислятьАмортизациюНУ;//Начислять амортизацию (НУ)
		///<summary>
		///(Упр)
		///</summary>
		public bool НачислятьАмортизациюУУ;//Начислять амортизацию (УУ)
		///<summary>
		///(Регл)
		///</summary>
		public bool НДСВключенВСтоимость;//НДС включен в стоимость
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Номенклатура Номенклатура;//Оборудование
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ОбъектыСтроительства ОбъектСтроительства;//Объект строительства
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
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПараметрыВыработкиОС ПараметрВыработкиБУ;//Параметр выработки БУ
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете;//Отражать в управленческом учете
		public bool ОтразитьВСоставеМПЗ;//Отразить в составе МПЗ
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации;//Подразделение организации
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ПараметрыВыработкиОС ПараметрВыработкиУУ;//Параметр выработки УУ
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение;
		public V82.Перечисления/*Ссылка*/.ПорядокВключенияСтоимостиОСВСоставРасходовНУ ПорядокВключенияСтоимостиВСоставРасходовНУ;//Порядок включения стоимости состав расходов (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(10)*/ ПредполагаемыйОбъемПродукцииБУ;//Предполагаемый объем продукции (работ) в натуральных ед.
		///<summary>
		///(Общ)
		///</summary>
		public bool ПринятиеКУчетуОдновременноСВводомВЭксплуатацию;//Принятие к учету одновременно с вводом в эксплуатацию
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(10)*/ ПредполагаемыйОбъемПродукцииУУ;//Предполагаемый объем продукции (работ) в натуральных ед.
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Склады Склад;
		///<summary>
		///(Общ)
		///</summary>
		public bool ПринятиеКУчетуОдновременноСВводомВЭксплуатациюРегл;//Принятие к учету одновременно с вводом в эксплуатацию (регл)
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ОсновныеСредства СоставОсновногоСредства;//Состав основного средства
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СерииНоменклатуры СерияМПЗ;//Серия номенклатуры (Отражение в составе МПЗ)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры;//Серия номенклатуры
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(6.2)*/ СпециальныйКоэффициентНУ;//Специальный коэффициент (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СпособыНачисленияАмортизацииОС СпособНачисленияАмортизацииБУ;//Способ начисления амортизации (БУ)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеВводВЭксплуатацию;//Событие ввод в эксплуатацию
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеВводВЭксплуатациюРегл;//Событие ввода в эксплуатацию (регл)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеПринятиеКУчету;//Событие принятие к учету
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СобытияОС СобытиеПринятиеКУчетуРегл;//Событие принятие к учету (регл)
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.МетодыНачисленияАмортизации СпособНачисленияАмортизацииНУ;//Способ начисления амортизации (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СпособыПоступленияАктивов СпособПоступления;//Способ поступления
		///<summary>
		///(Общ)
		///</summary>
		public bool СписыватьПриПринятииКУчету;//Списывать при принятии к учету
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации СпособыОтраженияРасходовПоАмортизации;//Способы отражения расходов по амортизации
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(4)*/ СрокПолезногоИспользованияБУ;//Срок полезного использования, мес.
		///<summary>
		///(Упр)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СпособыНачисленияАмортизацииОС СпособНачисленияАмортизацииУУ;//Способ начисления амортизации (УУ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(4)*/ СрокПолезногоИспользованияНУ;//Срок полезного использования (НУ), мес.
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(4)*/ СрокПолезногоИспользованияУСН;//Срок полезного использования (УСН), мес.
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьБУ;//Стоимость (бух. учет)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьБУХоз;//Стоимость БУ (Хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьНУ;//Стоимость (налог. учет)
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(4)*/ СрокПолезногоИспользованияУУ;//Срок полезного использования, мес.
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СтавкиНДС СтавкаНДС;//Ставка НДС
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(15.2)*/ Стоимость;//Стоимость (УУ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьНУХоз;//Стоимость НУ (Хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьПР;//Стоимость (ПР)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьПРХоз;//Стоимость (ПР) (хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьВР;//Стоимость (ВР)
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьВРХоз;//Стоимость (ВР) (хоз. способ)
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ СуммаНДС;//Сумма НДС
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(15.2)*/ СтоимостьУСН;//Стоимость (сумма расходов УСН)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетНачисленияАмортизацииБУ;//Счет начисления амортизации БУ
		///<summary>
		///(Регл)
		///</summary>
		public object СчетНачисленияАмортизацииНУ;//Счет начисления амортизации (НУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаБУ;//Счет учета (БУ)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаМПЗБУ;//Счет учета (БУ) (Отражение в составе МПЗ)
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаБУВнеоборотногоАктива;//Счет учета БУВнеоборотного актива
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаНУ;//Счет учета (НУ)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаМПЗ;//Характеристика номенклатуры (Отражение в составе МПЗ)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаНоменклатуры;//Характеристика номенклатуры
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов ШифрПоЕНАОФ;//Шифр по ЕНАОФ
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаНУВнеоборотногоАктива;//Счет учета НУВнеоборотного актива
		public decimal/*(4.2)*/ ПроцентКапитальныхВложенийВключаемыхВРасходыНУ;//Процент капитальных вложений, включаемых в расходы
		public V82.Перечисления/*Ссылка*/.ПорядокВключенияСтоимостиОСиНМАВСоставРасходовУСН ПорядокВключенияСтоимостиВСоставРасходовУСН;//Порядок включения стоимости в состав расходов (УСН)
		public V82.СправочникиСсылка.Номенклатура НоменклатураМПЗ;//Номенклатура (Отражение в составе МПЗ)
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Склады СкладМПЗ;//Склад (Отражение в составе МПЗ)
		public object СчетУчетаЗатратПоАмортизационнойПремии;//Счет учета затрат по амортизационной премии
		public object СубконтоПоАмортизационнойПремии1;//Субконто по амортизационной премии1
		public object СубконтоПоАмортизационнойПремии2;//Субконто по амортизационной премии2
		public object СубконтоПоАмортизационнойПремии3;//Субконто по амортизационной премии3
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.СпособыОтраженияРасходовПоАмортизации СпособОтраженияРасходовПриВключенииВСтоимость;//Способ отражения расходов при включении в стоимость
	}
}