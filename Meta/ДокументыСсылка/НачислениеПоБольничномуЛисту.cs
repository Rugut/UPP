
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class НачислениеПоБольничномуЛисту:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public DateTime ПериодРегистрации;//Период регистрации
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник;
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо;//Физическое лицо
		public V82.Перечисления/*Ссылка*/.ПричиныНетрудоспособности ПричинаНетрудоспособности;//Причина нетрудоспособности
		///<summary>
		///Процент оплаты
		///</summary>
		public decimal/*(6.2)*/ ПроцентОплаты;//Процент оплаты
		public bool ЯвляетсяПродолжениемБолезни;//Является продолжением болезни
		public V82.ДокументыСсылка.НачислениеПоБольничномуЛисту ПервичныйБольничныйЛист;//Первичный больничный лист
		///<summary>
		///Дата начала события, оплачиваемого по среднему заработку
		///</summary>
		public DateTime ДатаНачалаСобытия;//Дата начала события
		public DateTime ДатаНачала;//Дата начала
		public DateTime ДатаНачалаОплаты;//Дата начала оплаты
		public DateTime ДатаОкончания;//Дата окончания
		public DateTime ДатаНарушенияРежима;//Дата нарушения режима
		public bool ПособиеОтражаетсяВРеглУчетеТекущимДокументом;//Пособие отражается в регл учете текущим документом
		public V82.Перечисления/*Ссылка*/.ВидыОграниченияПособия ОграничениеПособия;//Ограничение пособия
		public string/*(12)*/ НомерВходящегоДокумента;//Номер документа сторонней организации
		public string/*(10)*/ СерияВходящегоДокумента;//Серия документа сторонней организации
		public V82.ДокументыСсылка.НачислениеПоБольничномуЛисту ПерерассчитываемыйДокумент;//Перерассчитываемый документ
		public V82.Перечисления/*Ссылка*/.ПричиныНетрудоспособности ПричинаНетрудоспособностиПереходногоПериода;//Причина нетрудоспособности переходного периода
		///<summary>
		///Процент оплаты
		///</summary>
		public decimal/*(6.2)*/ ПроцентОплатыПереходногоПериода;//Процент оплаты переходного периода
		public V82.Перечисления/*Ссылка*/.ВидыОграниченияПособия ОграничениеПособияПереходногоПериода;//Ограничение пособия переходного периода
		public V82.Перечисления/*Ссылка*/.СлучаиУходаЗаБольнымиДетьми СлучайУходаЗаБольнымРебенкомПереходногоПериода;//Случай ухода за больным ребенком переходного периода
		public V82.Перечисления/*Ссылка*/.СтратегииОтраженияВРеглУчетеНачислений СтратегияОтраженияВУчете;//Стратегия отражения в учете
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию УдалитьПриказ;//Удалить приказ
		public decimal/*(8.5)*/ ПодпадаетПодЕНВД;//Подпадает под ЕНВД
		public V82.Перечисления/*Ссылка*/.СлучаиУходаЗаБольнымиДетьми СлучайУходаЗаБольнымРебенком;//Случай ухода за больным ребенком
		public decimal/*(3)*/ ДнейОплаты;//Дней оплаты
		public object ВидРасчета;//Вид расчета
		public bool ДоплачиватьДоПолногоСреднегоЗаработка;//Доплачивать до полного среднего заработка
		public object ВидРасчетаДоплаты;//Вид расчета доплаты
		///<summary>
		///Дата начала расчетного периода
		///</summary>
		public DateTime ПериодРасчетаСреднегоЗаработкаНачало;//Период расчета среднего заработка начало
		///<summary>
		///Дата окончания расчетного периода
		///</summary>
		public DateTime ПериодРасчетаСреднегоЗаработкаОкончание;//Период расчета среднего заработка окончание
		///<summary>
		///Процент оплаты
		///</summary>
		public decimal/*(6.2)*/ ПроцентОплатыБезЛьгот;//Процент оплаты без льгот
		public V82.Перечисления/*Ссылка*/.ВидыОграниченияПособия ОграничениеПособияБезЛьгот;//Ограничение пособия без льгот
		public bool ПрименятьЛьготыПриНачисленииПособия;//Применять льготы при начислении пособия
		public V82.Перечисления/*Ссылка*/.ВыплатыПособийЗаСчетФедеральногоБюджета ВыплатаЗаСчетФедеральногоБюджета;//Выплата за счет федерального бюджета
		public object ВидРасчетаЗаСчетРаботодателя;//Вид расчета за счет работодателя
		public bool УчитыватьЗаработокПредыдущихСтрахователей;//Учитывать заработок предыдущих страхователей
		public decimal/*(1)*/ ДнейОплатыРаботодателем;//Дней оплаты работодателем
		public bool НеВыплачиватьПособие;//Не выплачивать пособие
		public bool РасчетПоПравилам2010Года;//Расчет по правилам 2010 года
		public string/*(2)*/ УсловияИсчисленияКод1;//Условия исчисления: код
		public string/*(2)*/ УсловияИсчисленияКод2;//Условия исчисления: код
		public string/*(2)*/ УсловияИсчисленияКод3;//Условия исчисления: код
		public decimal/*(2)*/ СтажЛет;//Стаж: лет
		public decimal/*(2)*/ СтажМесяцев;//Стаж: месяцев
		public decimal/*(2)*/ СтажБезНестраховыхПериодовЛет;//Стаж: лет
		public decimal/*(2)*/ СтажБезНестраховыхПериодовСтажМесяцев;//Стаж: месяцев
		public bool ПеречислятьПособиеПочтовымПереводом;//Перечислять пособие почтовым переводом
		public V82.СправочникиСсылка.Банки Банк;
		public string/*(100)*/ НаименованиеБанка;//Наименование банка
		public string/*(9)*/ БИКБанка;//БИК банка
		public string/*(20)*/ НомерЛицевогоСчета;//Номер лицевого счета
		public string/*(240)*/ АдресПочтовый;//Адрес почтовый
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Фамилия;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Имя;
		///<summary>
		///(Общ)
		///</summary>
		public string/*(40)*/ Отчество;
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ВидДокумента;//Вид документа
		public string/*(14)*/ СерияДокумента;//Серия документа
		public string/*(14)*/ НомерДокумента;//Номер документа
		public DateTime ДатаВыдачиДокумента;//Дата выдачи документа
		public DateTime ДатаДействияДокумента;//Дата действия документа
		public DateTime ПериодПростояС;//Период простоя: с
		public DateTime ПериодПростояПо;//Период простоя: по
		public bool РасчетПособияИзТарифнойСтавки;//Расчет пособия из тарифной ставки
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьУполномоченного;//Должность уполномоченного
		public V82.СправочникиСсылка.ФизическиеЛица Уполномоченный;
		public bool ПоставленаНаУчетВРанниеСрокиБеременности;//Поставлена на учет в ранние сроки беременности
		public DateTime ДатаВыдачиБольничного;//Дата выдачи больничного
		public string/*(2)*/ КодПричиныНетрудоспособности;//Код причины нетрудоспособности
		public string/*(3)*/ ДополнительныйКодПричиныНетрудоспособности;//Дополнительный код причины нетрудоспособности
		public string/*(2)*/ ВторойКодПричиныНетрудоспособности;//Второй код причины нетрудоспособности
		public DateTime ДатаИзмененияКодаПричиныНетрудоспособности;//Дата изменения кода причины нетрудоспособности
		public DateTime ДатаСправкиБеременной;//Дата справки беременной
		public DateTime ПериодНахожденияВСтационареСРебенкомС;//Период нахождения в стационаре с ребенком: с
		public DateTime ПериодНахожденияВСтационареСРебенкомПо;//Период нахождения в стационаре с ребенком: по
		public string/*(2)*/ КодНарушенияРежима;//Код нарушения режима
		public DateTime ДатаРегистрацииДокументовМСЭ;//Дата регистрации документов МСЭ
		public bool УстановленаИзмененаГруппаИнвалидности;//Установлена/изменена группа инвалидности
		public DateTime ДатаВыходаНаРаботу;//Дата выхода на работу
		public bool ЯвляетсяДубликатом;//Является дубликатом
		public string/*(240)*/ АдресЛПУ;//Адрес ЛПУ
		public string/*(0)*/ НаименованиеЛПУ;//Наименование ЛПУ
		public string/*(15)*/ ОГРН_ЛПУ;//ОГРН ЛПУ
		public string/*(12)*/ НомерЛисткаПоОсновномуМестуРаботы;//Номер листка по основному месту работы
		public DateTime ДатаОкончанияПутевки;//Дата окончания путевки
		public string/*(10)*/ НомерПутевки;//Номер путевки
		public string/*(15)*/ ОГРН_Санатория;//ОГРН санатория
		public string/*(12)*/ НомерЛисткаПродолжения;//Номер листка продолжения
		public DateTime ДатаНаправленияВБюроМСЭ;//Дата направления в бюро МСЭ
		public DateTime ДатаОсвидетельствованияМСЭ;//Дата освидетельствования МСЭ
		public string/*(2)*/ НовыйСтатусНетрудопособного;//Новый статус нетрудопособного
		public DateTime ДатаНовыйСтатусНетрудопособного;//Дата новый статус нетрудопособного
		public string/*(0)*/ КемВыданДокумент;//Кем выдан документ
		public string/*(1)*/ ГруппаИнвалидности;//Группа инвалидности
		public string/*(2)*/ КодПричиныПерерасчета;//Код причины перерасчета
		public decimal/*(15.2)*/ НДФЛсПособия;//НДФЛ с пособия
		///<summary>
		///Корреспонденский счет банка
		///</summary>
		public string/*(20)*/ КоррСчетБанка;//Корр. счет банка
		public string/*(14)*/ НомерСправкиБеременной;//Номер справки беременной
		public string/*(100)*/ НаименованиеДокументаНаПроживание;//Наименование документа на проживание
		public string/*(14)*/ СерияДокументаНаПроживание;//Серия документа на проживание
		public string/*(14)*/ НомерДокументаНаПроживание;//Номер документа на проживание
		public DateTime ДатаВыдачиДокументаНаПроживание;//Дата выдачи документа на проживание
		public string/*(240)*/ АдресРегистрации;//Адрес регистрации
		public string/*(15)*/ Телефон;
		public decimal/*(15.2)*/ ТарифнаяСтавкаОклад;//Тарифная ставка оклад
		public decimal/*(15.2)*/ СреднедневнойЗаработокНаПериодПростоя;//Среднедневной заработок на период простоя
		public string/*(30)*/ ТелефонСоставителя;//Телефон составителя
		public string/*(17)*/ АдресПочтовыйКодПоКЛАДР;//Адрес почтовый код по КЛАДР
		public string/*(17)*/ АдресРегистрацииКодПоКЛАДР;//Адрес регистрации код по КЛАДР
		public string/*(17)*/ АдресЛПУКодПоКЛАДР;//Адрес ЛПУКод по КЛАДР
		public V82.СправочникиСсылка.МедицинскиеОрганизации ЛПУ;
		public bool НовыйПорядокРасчетаПособияПоМатеринствуПриИсправлении;//Новый порядок расчета пособия по материнству при исправлении
	}
}