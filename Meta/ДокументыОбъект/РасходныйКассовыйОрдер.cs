
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасходныйКассовыйОрдер:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Кассы Касса {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Выдать {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Основание {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//договор контрагента
		///<summary>
		///(Общ) Валюта, в которой подотчетник должен отчитаться за истраченные деньги
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты ВалютаВзаиморасчетовРаботника {get;set;}//Валюта взаиморасчетов работника
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ Приложение {get;set;}
		///<summary>
		///(Упр) срок погашения аванса подотчетником
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public DateTime ДатаПогашенияАванса {get;set;}//Дата погашения аванса
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object РасчетныйДокумент {get;set;}//Расчетный документ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ ПоДокументу {get;set;}//По
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public bool Оплачено {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object Контрагент {get;set;}//Контрагент, подотчетник, Касса ККМ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийРКО ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоДт1 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоДт2 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СубконтоДт3 {get;set;}//Субконто Дт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Общ)  Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		[DataMember]
		[ProtoMember(38)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(40)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(41)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(42)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(43)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(44)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(45)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(46)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(47)]
		public V82.Перечисления/*Ссылка*/.ВидВыдачиДенежныхСредств ВидВыдачиДенежныхСредств {get;set;}//Вид выдачи денежных средств
		[DataMember]
		[ProtoMember(48)]
		public V82.ДокументыСсылка.ОбъявлениеНаВзносНаличными ОбъявлениеНаВзносНаличными {get;set;}//Объявление на взнос наличными
		///<summary>
		///Номер чека на фискальном регистраторе
		///</summary>
		[DataMember]
		[ProtoMember(49)]
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(50)]
		public object СчетУчетаРасчетовСКонтрагентомНУ {get;set;}//Счет учета расчетов с контрагентом НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(51)]
		public object СубконтоНУДт1 {get;set;}//Субконто НУДт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(52)]
		public object СубконтоНУДт2 {get;set;}//Субконто НУДт2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(53)]
		public object СубконтоНУДт3 {get;set;}//Субконто НУДт3
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document421(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld10516RRef
						,_Fld10517RRef
						,_Fld10518RRef
						,_Fld10534RRef
						,_Fld10528
						,_Fld10529
						,_Fld10522RRef
						,_Fld10523RRef
						,_Fld10524RRef
						,_Fld10530
						,_Fld10526
						,_Fld10531
						,_Fld10536
						,_Fld10537
						,_Fld10520
						,_Fld10532
						,_Fld10533
						,_Fld10519RRef
						,_Fld10525
						,_Fld10544
						,_Fld10538RRef
						,_Fld10539RRef
						,_Fld10540RRef
						,_Fld10541RRef
						,_Fld10542RRef
						,_Fld10543RRef
						,_Fld10545
						,_Fld10546
						,_Fld10547
						,_Fld10548
						,_Fld10549
						,_Fld10550
						,_Fld10551
						,_Fld10552
						,_Fld10553
						,_Fld10554RRef
						,_Fld10555RRef
						,_Fld10556
						,_Fld19519RRef
						,_Fld19520RRef
						,_Fld19521RRef
						,_Fld19522RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Касса
						,@Подразделение
						,@Ответственный
						,@Выдать
						,@Основание
						,@ДоговорКонтрагента
						,@ВалютаВзаиморасчетовРаботника
						,@ВалютаДокумента
						,@Приложение
						,@ДатаПогашенияАванса
						,@ПоДокументу
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@Комментарий
						,@ОтраженоВОперУчете
						,@Оплачено
						,@ВидОперации
						,@СуммаДокумента
						,@ОтражатьВНалоговомУчете
						,@СубконтоДт1
						,@СубконтоДт2
						,@СубконтоДт3
						,@СчетУчетаРасчетовСКонтрагентом
						,@СтатьяДвиженияДенежныхСредств
						,@СчетОрганизации
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@ВидВыдачиДенежныхСредств
						,@ОбъявлениеНаВзносНаличными
						,@НомерЧекаККМ
						,@СчетУчетаРасчетовСКонтрагентомНУ
						,@СубконтоНУДт1
						,@СубконтоНУДт2
						,@СубконтоНУДт3)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document421
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld10516RRef	= @Организация
						,_Fld10517RRef	= @Касса
						,_Fld10518RRef	= @Подразделение
						,_Fld10534RRef	= @Ответственный
						,_Fld10528	= @Выдать
						,_Fld10529	= @Основание
						,_Fld10522RRef	= @ДоговорКонтрагента
						,_Fld10523RRef	= @ВалютаВзаиморасчетовРаботника
						,_Fld10524RRef	= @ВалютаДокумента
						,_Fld10530	= @Приложение
						,_Fld10526	= @ДатаПогашенияАванса
						,_Fld10531	= @ПоДокументу
						,_Fld10536	= @ОтражатьВУправленческомУчете
						,_Fld10537	= @ОтражатьВБухгалтерскомУчете
						,_Fld10520	= @Комментарий
						,_Fld10532	= @ОтраженоВОперУчете
						,_Fld10533	= @Оплачено
						,_Fld10519RRef	= @ВидОперации
						,_Fld10525	= @СуммаДокумента
						,_Fld10544	= @ОтражатьВНалоговомУчете
						,_Fld10538RRef	= @СубконтоДт1
						,_Fld10539RRef	= @СубконтоДт2
						,_Fld10540RRef	= @СубконтоДт3
						,_Fld10541RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld10542RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld10543RRef	= @СчетОрганизации
						,_Fld10545	= @Содержание_УСН
						,_Fld10546	= @Графа4_УСН
						,_Fld10547	= @Графа5_УСН
						,_Fld10548	= @Графа6_УСН
						,_Fld10549	= @Графа7_УСН
						,_Fld10550	= @ДоходыЕНВД_УСН
						,_Fld10551	= @РасходыЕНВД_УСН
						,_Fld10552	= @НДС_УСН
						,_Fld10553	= @РучнаяНастройка_УСН
						,_Fld10554RRef	= @ВидВыдачиДенежныхСредств
						,_Fld10555RRef	= @ОбъявлениеНаВзносНаличными
						,_Fld10556	= @НомерЧекаККМ
						,_Fld19519RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld19520RRef	= @СубконтоНУДт1
						,_Fld19521RRef	= @СубконтоНУДт2
						,_Fld19522RRef	= @СубконтоНУДт3
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Выдать", Выдать);
					Команда.Parameters.AddWithValue("Основание", Основание);
					Команда.Parameters.AddWithValue("Приложение", Приложение);
					Команда.Parameters.AddWithValue("ДатаПогашенияАванса", ДатаПогашенияАванса);
					Команда.Parameters.AddWithValue("ПоДокументу", ПоДокументу);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СубконтоДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоДт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("ВидВыдачиДенежныхСредств", ВидВыдачиДенежныхСредств.Ключ());
					Команда.Parameters.AddWithValue("ОбъявлениеНаВзносНаличными", ОбъявлениеНаВзносНаличными.Ссылка);
					Команда.Parameters.AddWithValue("НомерЧекаККМ", НомерЧекаККМ);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентомНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУДт3", Guid.Empty);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document421
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}