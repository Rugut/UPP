
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
						Insert Into _Document550(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld15250RRef
						,_Fld15251RRef
						,_Fld15252RRef
						,_Fld15253RRef
						,_Fld15254
						,_Fld15255
						,_Fld15256RRef
						,_Fld15257RRef
						,_Fld15258RRef
						,_Fld15259
						,_Fld15260
						,_Fld15262
						,_Fld15263
						,_Fld15264
						,_Fld15265
						,_Fld15266
						,_Fld15267
						,_Fld15269RRef
						,_Fld15270
						,_Fld15272
						,_Fld15273RRef
						,_Fld15274RRef
						,_Fld15275RRef
						,_Fld15276RRef
						,_Fld15277RRef
						,_Fld15278RRef
						,_Fld15279
						,_Fld15280
						,_Fld15281
						,_Fld15282
						,_Fld15283
						,_Fld15284
						,_Fld15285
						,_Fld15286
						,_Fld15287
						,_Fld15288RRef
						,_Fld15289RRef
						,_Fld15290
						,_Fld15291RRef
						,_Fld15292RRef
						,_Fld15293RRef
						,_Fld15294RRef)
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
						Update _Document550
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld15250RRef	= @Организация
						,_Fld15251RRef	= @Касса
						,_Fld15252RRef	= @Подразделение
						,_Fld15253RRef	= @Ответственный
						,_Fld15254	= @Выдать
						,_Fld15255	= @Основание
						,_Fld15256RRef	= @ДоговорКонтрагента
						,_Fld15257RRef	= @ВалютаВзаиморасчетовРаботника
						,_Fld15258RRef	= @ВалютаДокумента
						,_Fld15259	= @Приложение
						,_Fld15260	= @ДатаПогашенияАванса
						,_Fld15262	= @ПоДокументу
						,_Fld15263	= @ОтражатьВУправленческомУчете
						,_Fld15264	= @ОтражатьВБухгалтерскомУчете
						,_Fld15265	= @Комментарий
						,_Fld15266	= @ОтраженоВОперУчете
						,_Fld15267	= @Оплачено
						,_Fld15269RRef	= @ВидОперации
						,_Fld15270	= @СуммаДокумента
						,_Fld15272	= @ОтражатьВНалоговомУчете
						,_Fld15273RRef	= @СубконтоДт1
						,_Fld15274RRef	= @СубконтоДт2
						,_Fld15275RRef	= @СубконтоДт3
						,_Fld15276RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld15277RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld15278RRef	= @СчетОрганизации
						,_Fld15279	= @Содержание_УСН
						,_Fld15280	= @Графа4_УСН
						,_Fld15281	= @Графа5_УСН
						,_Fld15282	= @Графа6_УСН
						,_Fld15283	= @Графа7_УСН
						,_Fld15284	= @ДоходыЕНВД_УСН
						,_Fld15285	= @РасходыЕНВД_УСН
						,_Fld15286	= @НДС_УСН
						,_Fld15287	= @РучнаяНастройка_УСН
						,_Fld15288RRef	= @ВидВыдачиДенежныхСредств
						,_Fld15289RRef	= @ОбъявлениеНаВзносНаличными
						,_Fld15290	= @НомерЧекаККМ
						,_Fld15291RRef	= @СчетУчетаРасчетовСКонтрагентомНУ
						,_Fld15292RRef	= @СубконтоНУДт1
						,_Fld15293RRef	= @СубконтоНУДт2
						,_Fld15294RRef	= @СубконтоНУДт3
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
					Команда.CommandText = @"Delete _Document550
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}