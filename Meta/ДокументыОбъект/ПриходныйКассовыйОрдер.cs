
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
	public partial class ПриходныйКассовыйОрдер:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПКО ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public object Контрагент {get;set;}//Контрагент, подотчетник, касса ККМ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Валюты ВалютаВзаиморасчетовПодотчетника {get;set;}//Валюта взаиморасчетов подотчетника
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ ПринятоОт {get;set;}//Принято от
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ Основание {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(0)*/ Приложение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтраженоВОперУчете {get;set;}//Отражено в опер. учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool Оплачено {get;set;}
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object РасчетныйДокумент {get;set;}//Расчетный документ
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоКт1 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоКт2 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоКт3 {get;set;}//Субконто Кт1
		///<summary>
		///(Регл) Банковский счет организации
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Счет организации
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public V82.Перечисления/*Ссылка*/.СтавкиНДС СтавкаНДС {get;set;}//Ставка НДС
		[DataMember]
		[ProtoMember(37)]
		public string/*(200)*/ Содержание_УСН {get;set;}//Содержание УСН
		[DataMember]
		[ProtoMember(38)]
		public decimal/*(15.2)*/ Графа4_УСН {get;set;}//Графа4 УСН
		[DataMember]
		[ProtoMember(39)]
		public decimal/*(15.2)*/ Графа5_УСН {get;set;}//Графа5 УСН
		[DataMember]
		[ProtoMember(40)]
		public decimal/*(15.2)*/ Графа6_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(41)]
		public decimal/*(15.2)*/ Графа7_УСН {get;set;}//Графа5
		[DataMember]
		[ProtoMember(42)]
		public bool ДоходыЕНВД_УСН {get;set;}//ДоходыЕНВД
		[DataMember]
		[ProtoMember(43)]
		public bool РасходыЕНВД_УСН {get;set;}//Расходы ЕНВД УСН
		[DataMember]
		[ProtoMember(44)]
		public decimal/*(15.2)*/ НДС_УСН {get;set;}//НДС УСН
		[DataMember]
		[ProtoMember(45)]
		public bool РучнаяНастройка_УСН {get;set;}//Ручная настройка УСН
		[DataMember]
		[ProtoMember(46)]
		public bool ВыручкаСНТТ {get;set;}//НТТ
		///<summary>
		///Номер чека на фискальном регистраторе
		///</summary>
		[DataMember]
		[ProtoMember(47)]
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		[DataMember]
		[ProtoMember(48)]
		public V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки ВидПриемаРозничнойВыручки {get;set;}//Вид приема розничной выручки
		[DataMember]
		[ProtoMember(49)]
		public V82.ДокументыСсылка.ДенежныйЧек ДенежныйЧек {get;set;}//Денежный чек
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
						Insert Into _Document412(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld10111RRef
						,_Fld10112RRef
						,_Fld10113RRef
						,_Fld10114RRef
						,_Fld10116RRef
						,_Fld10117RRef
						,_Fld10118RRef
						,_Fld10119
						,_Fld10121
						,_Fld10122
						,_Fld10123
						,_Fld10126RRef
						,_Fld10124
						,_Fld10125
						,_Fld10127
						,_Fld10129
						,_Fld10130
						,_Fld10137
						,_Fld10131RRef
						,_Fld10132RRef
						,_Fld10133RRef
						,_Fld10134RRef
						,_Fld10136RRef
						,_Fld10135RRef
						,_Fld10138RRef
						,_Fld10140
						,_Fld10141
						,_Fld10142
						,_Fld10143
						,_Fld10144
						,_Fld10145
						,_Fld10146
						,_Fld10147
						,_Fld10148
						,_Fld10139
						,_Fld10149
						,_Fld10150RRef
						,_Fld10151RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Касса
						,@Подразделение
						,@ВидОперации
						,@ДоговорКонтрагента
						,@ВалютаВзаиморасчетовПодотчетника
						,@ВалютаДокумента
						,@СуммаДокумента
						,@ПринятоОт
						,@Основание
						,@Приложение
						,@Ответственный
						,@ОтраженоВОперУчете
						,@Оплачено
						,@Комментарий
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@СчетУчетаРасчетовСКонтрагентом
						,@СубконтоКт1
						,@СубконтоКт2
						,@СубконтоКт3
						,@СчетОрганизации
						,@СтатьяДвиженияДенежныхСредств
						,@СтавкаНДС
						,@Содержание_УСН
						,@Графа4_УСН
						,@Графа5_УСН
						,@Графа6_УСН
						,@Графа7_УСН
						,@ДоходыЕНВД_УСН
						,@РасходыЕНВД_УСН
						,@НДС_УСН
						,@РучнаяНастройка_УСН
						,@ВыручкаСНТТ
						,@НомерЧекаККМ
						,@ВидПриемаРозничнойВыручки
						,@ДенежныйЧек)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document412
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld10111RRef	= @Организация
						,_Fld10112RRef	= @Касса
						,_Fld10113RRef	= @Подразделение
						,_Fld10114RRef	= @ВидОперации
						,_Fld10116RRef	= @ДоговорКонтрагента
						,_Fld10117RRef	= @ВалютаВзаиморасчетовПодотчетника
						,_Fld10118RRef	= @ВалютаДокумента
						,_Fld10119	= @СуммаДокумента
						,_Fld10121	= @ПринятоОт
						,_Fld10122	= @Основание
						,_Fld10123	= @Приложение
						,_Fld10126RRef	= @Ответственный
						,_Fld10124	= @ОтраженоВОперУчете
						,_Fld10125	= @Оплачено
						,_Fld10127	= @Комментарий
						,_Fld10129	= @ОтражатьВУправленческомУчете
						,_Fld10130	= @ОтражатьВБухгалтерскомУчете
						,_Fld10137	= @ОтражатьВНалоговомУчете
						,_Fld10131RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld10132RRef	= @СубконтоКт1
						,_Fld10133RRef	= @СубконтоКт2
						,_Fld10134RRef	= @СубконтоКт3
						,_Fld10136RRef	= @СчетОрганизации
						,_Fld10135RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld10138RRef	= @СтавкаНДС
						,_Fld10140	= @Содержание_УСН
						,_Fld10141	= @Графа4_УСН
						,_Fld10142	= @Графа5_УСН
						,_Fld10143	= @Графа6_УСН
						,_Fld10144	= @Графа7_УСН
						,_Fld10145	= @ДоходыЕНВД_УСН
						,_Fld10146	= @РасходыЕНВД_УСН
						,_Fld10147	= @НДС_УСН
						,_Fld10148	= @РучнаяНастройка_УСН
						,_Fld10139	= @ВыручкаСНТТ
						,_Fld10149	= @НомерЧекаККМ
						,_Fld10150RRef	= @ВидПриемаРозничнойВыручки
						,_Fld10151RRef	= @ДенежныйЧек
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ПринятоОт", ПринятоОт);
					Команда.Parameters.AddWithValue("Основание", Основание);
					Команда.Parameters.AddWithValue("Приложение", Приложение);
					Команда.Parameters.AddWithValue("ОтраженоВОперУчете", ОтраженоВОперУчете);
					Команда.Parameters.AddWithValue("Оплачено", Оплачено);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоКт3", Guid.Empty);
					Команда.Parameters.AddWithValue("СтавкаНДС", СтавкаНДС.Ключ());
					Команда.Parameters.AddWithValue("Содержание_УСН", Содержание_УСН);
					Команда.Parameters.AddWithValue("Графа4_УСН", Графа4_УСН);
					Команда.Parameters.AddWithValue("Графа5_УСН", Графа5_УСН);
					Команда.Parameters.AddWithValue("Графа6_УСН", Графа6_УСН);
					Команда.Parameters.AddWithValue("Графа7_УСН", Графа7_УСН);
					Команда.Parameters.AddWithValue("ДоходыЕНВД_УСН", ДоходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("РасходыЕНВД_УСН", РасходыЕНВД_УСН);
					Команда.Parameters.AddWithValue("НДС_УСН", НДС_УСН);
					Команда.Parameters.AddWithValue("РучнаяНастройка_УСН", РучнаяНастройка_УСН);
					Команда.Parameters.AddWithValue("ВыручкаСНТТ", ВыручкаСНТТ);
					Команда.Parameters.AddWithValue("НомерЧекаККМ", НомерЧекаККМ);
					Команда.Parameters.AddWithValue("ВидПриемаРозничнойВыручки", ВидПриемаРозничнойВыручки.Ключ());
					Команда.Parameters.AddWithValue("ДенежныйЧек", ДенежныйЧек.Ссылка);
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
					Команда.CommandText = @"Delete _Document412
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}