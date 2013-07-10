
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СправкаПоНДФЛСотруднику:ДокументОбъект
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
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(4)*/ НалоговыйПериод {get;set;}//Налоговый период
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(21)*/ ОКАТО_КПП {get;set;}//ОКАТО/КПП
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ПорядокФормированияСправкиОДоходахФизлица СпособФормирования {get;set;}//Способ формирования
		[DataMember]
		[ProtoMember(15)]
		public string/*(20)*/ Телефон {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ФизическиеЛица СправкуПодписал {get;set;}//Справку подписал
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьПодписавшегоЛица {get;set;}//Должность подписавшего лица
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ФизическиеЛица Сотрудник {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.Перечисления/*Ссылка*/.НДФЛСтавки Ставка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public string/*(40)*/ Фамилия {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public string/*(40)*/ Имя {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public string/*(40)*/ Отчество {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public string/*(240)*/ АдресРФ {get;set;}//Адрес РФ
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.ДокументыУдостоверяющиеЛичность ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(25)]
		public string/*(14)*/ СерияДокумента {get;set;}//Серия документа
		[DataMember]
		[ProtoMember(26)]
		public string/*(14)*/ НомерДокумента {get;set;}//Номер документа
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ ОбщаяСуммаДохода {get;set;}//Общая сумма дохода
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ ОблагаемаяСуммаДохода {get;set;}//Облагаемая сумма дохода
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(12)*/ Исчислено {get;set;}
		[DataMember]
		[ProtoMember(30)]
		public decimal/*(12)*/ Задолженность {get;set;}
		[DataMember]
		[ProtoMember(31)]
		public decimal/*(12)*/ ИзлишнеУдержано {get;set;}//Излишне удержано
		[DataMember]
		[ProtoMember(32)]
		public decimal/*(12)*/ Удержано {get;set;}
		[DataMember]
		[ProtoMember(33)]
		public decimal/*(12)*/ Перечислено {get;set;}
		[DataMember]
		[ProtoMember(34)]
		public string/*(240)*/ АдресЗарубежом {get;set;}//Адрес зарубежом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public DateTime ДатаРождения {get;set;}//Дата рождения
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public string/*(12)*/ ИНН {get;set;}
		[DataMember]
		[ProtoMember(37)]
		public V82.СправочникиСсылка.КлассификаторСтранМира Гражданство {get;set;}
		[DataMember]
		[ProtoMember(38)]
		public V82.Перечисления/*Ссылка*/.СтатусыНалогоплательщиковПоНДФЛ СтатусНалогоплательщика {get;set;}//Статус налогоплательщика
		[DataMember]
		[ProtoMember(39)]
		public DateTime ДатаУведомления {get;set;}//Дата уведомления
		[DataMember]
		[ProtoMember(40)]
		public string/*(20)*/ НомерУведомления {get;set;}//Номер уведомления
		[DataMember]
		[ProtoMember(41)]
		public string/*(4)*/ КодНалоговогоОрганаУведомления {get;set;}//Код налогового органа уведомления
		///<summary>
		///Ведет себя по правилам 2010 года.
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public bool СпециальныйДокумент2011года {get;set;}//Специальный документ 2011 года
		[DataMember]
		[ProtoMember(43)]
		public string/*(4)*/ КодИФНС {get;set;}//Код ИФНС
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
						Insert Into _Document23175(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld25523RRef
						,_Fld25524
						,_Fld25525
						,_Fld25526RRef
						,_Fld25527
						,_Fld25528RRef
						,_Fld25529
						,_Fld25530RRef
						,_Fld25531RRef
						,_Fld25532RRef
						,_Fld25533RRef
						,_Fld25534
						,_Fld25535
						,_Fld25536
						,_Fld25537
						,_Fld25538RRef
						,_Fld25539
						,_Fld25540
						,_Fld25541
						,_Fld25542
						,_Fld25543
						,_Fld25544
						,_Fld25545
						,_Fld25546
						,_Fld25547
						,_Fld25548
						,_Fld25549
						,_Fld25550
						,_Fld25551RRef
						,_Fld25552RRef
						,_Fld25553
						,_Fld25554
						,_Fld25555
						,_Fld25556
						,_Fld25557)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Ответственный
						,@Комментарий
						,@НалоговыйПериод
						,@Организация
						,@ОКАТО_КПП
						,@СпособФормирования
						,@Телефон
						,@СправкуПодписал
						,@ДолжностьПодписавшегоЛица
						,@Сотрудник
						,@Ставка
						,@Фамилия
						,@Имя
						,@Отчество
						,@АдресРФ
						,@ВидДокумента
						,@СерияДокумента
						,@НомерДокумента
						,@ОбщаяСуммаДохода
						,@ОблагаемаяСуммаДохода
						,@Исчислено
						,@Задолженность
						,@ИзлишнеУдержано
						,@Удержано
						,@Перечислено
						,@АдресЗарубежом
						,@ДатаРождения
						,@ИНН
						,@Гражданство
						,@СтатусНалогоплательщика
						,@ДатаУведомления
						,@НомерУведомления
						,@КодНалоговогоОрганаУведомления
						,@СпециальныйДокумент2011года
						,@КодИФНС)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23175
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld25523RRef	= @Ответственный
						,_Fld25524	= @Комментарий
						,_Fld25525	= @НалоговыйПериод
						,_Fld25526RRef	= @Организация
						,_Fld25527	= @ОКАТО_КПП
						,_Fld25528RRef	= @СпособФормирования
						,_Fld25529	= @Телефон
						,_Fld25530RRef	= @СправкуПодписал
						,_Fld25531RRef	= @ДолжностьПодписавшегоЛица
						,_Fld25532RRef	= @Сотрудник
						,_Fld25533RRef	= @Ставка
						,_Fld25534	= @Фамилия
						,_Fld25535	= @Имя
						,_Fld25536	= @Отчество
						,_Fld25537	= @АдресРФ
						,_Fld25538RRef	= @ВидДокумента
						,_Fld25539	= @СерияДокумента
						,_Fld25540	= @НомерДокумента
						,_Fld25541	= @ОбщаяСуммаДохода
						,_Fld25542	= @ОблагаемаяСуммаДохода
						,_Fld25543	= @Исчислено
						,_Fld25544	= @Задолженность
						,_Fld25545	= @ИзлишнеУдержано
						,_Fld25546	= @Удержано
						,_Fld25547	= @Перечислено
						,_Fld25548	= @АдресЗарубежом
						,_Fld25549	= @ДатаРождения
						,_Fld25550	= @ИНН
						,_Fld25551RRef	= @Гражданство
						,_Fld25552RRef	= @СтатусНалогоплательщика
						,_Fld25553	= @ДатаУведомления
						,_Fld25554	= @НомерУведомления
						,_Fld25555	= @КодНалоговогоОрганаУведомления
						,_Fld25556	= @СпециальныйДокумент2011года
						,_Fld25557	= @КодИФНС
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НалоговыйПериод", НалоговыйПериод);
					Команда.Parameters.AddWithValue("ОКАТО_КПП", ОКАТО_КПП);
					Команда.Parameters.AddWithValue("СпособФормирования", СпособФормирования.Ключ());
					Команда.Parameters.AddWithValue("Телефон", Телефон);
					Команда.Parameters.AddWithValue("Ставка", Ставка.Ключ());
					Команда.Parameters.AddWithValue("Фамилия", Фамилия);
					Команда.Parameters.AddWithValue("Имя", Имя);
					Команда.Parameters.AddWithValue("Отчество", Отчество);
					Команда.Parameters.AddWithValue("АдресРФ", АдресРФ);
					Команда.Parameters.AddWithValue("СерияДокумента", СерияДокумента);
					Команда.Parameters.AddWithValue("НомерДокумента", НомерДокумента);
					Команда.Parameters.AddWithValue("ОбщаяСуммаДохода", ОбщаяСуммаДохода);
					Команда.Parameters.AddWithValue("ОблагаемаяСуммаДохода", ОблагаемаяСуммаДохода);
					Команда.Parameters.AddWithValue("Исчислено", Исчислено);
					Команда.Parameters.AddWithValue("Задолженность", Задолженность);
					Команда.Parameters.AddWithValue("ИзлишнеУдержано", ИзлишнеУдержано);
					Команда.Parameters.AddWithValue("Удержано", Удержано);
					Команда.Parameters.AddWithValue("Перечислено", Перечислено);
					Команда.Parameters.AddWithValue("АдресЗарубежом", АдресЗарубежом);
					Команда.Parameters.AddWithValue("ДатаРождения", ДатаРождения);
					Команда.Parameters.AddWithValue("ИНН", ИНН);
					Команда.Parameters.AddWithValue("СтатусНалогоплательщика", СтатусНалогоплательщика.Ключ());
					Команда.Parameters.AddWithValue("ДатаУведомления", ДатаУведомления);
					Команда.Parameters.AddWithValue("НомерУведомления", НомерУведомления);
					Команда.Parameters.AddWithValue("КодНалоговогоОрганаУведомления", КодНалоговогоОрганаУведомления);
					Команда.Parameters.AddWithValue("СпециальныйДокумент2011года", СпециальныйДокумент2011года);
					Команда.Parameters.AddWithValue("КодИФНС", КодИФНС);
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
					Команда.CommandText = @"Delete _Document23175
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}