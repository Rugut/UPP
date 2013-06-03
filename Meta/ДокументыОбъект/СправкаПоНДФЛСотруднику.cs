
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
						Insert Into _Document601(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld17581RRef
						,_Fld17582
						,_Fld17583
						,_Fld17584RRef
						,_Fld17585
						,_Fld17586RRef
						,_Fld17587
						,_Fld17588RRef
						,_Fld17589RRef
						,_Fld17590RRef
						,_Fld17591RRef
						,_Fld17592
						,_Fld17593
						,_Fld17594
						,_Fld17595
						,_Fld17596RRef
						,_Fld17597
						,_Fld17598
						,_Fld17599
						,_Fld17600
						,_Fld17601
						,_Fld17602
						,_Fld17603
						,_Fld17604
						,_Fld17605
						,_Fld17606
						,_Fld17607
						,_Fld17608
						,_Fld17609RRef
						,_Fld17610RRef
						,_Fld17611
						,_Fld17612
						,_Fld17613
						,_Fld17614
						,_Fld17615)
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
						Update _Document601
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld17581RRef	= @Ответственный
						,_Fld17582	= @Комментарий
						,_Fld17583	= @НалоговыйПериод
						,_Fld17584RRef	= @Организация
						,_Fld17585	= @ОКАТО_КПП
						,_Fld17586RRef	= @СпособФормирования
						,_Fld17587	= @Телефон
						,_Fld17588RRef	= @СправкуПодписал
						,_Fld17589RRef	= @ДолжностьПодписавшегоЛица
						,_Fld17590RRef	= @Сотрудник
						,_Fld17591RRef	= @Ставка
						,_Fld17592	= @Фамилия
						,_Fld17593	= @Имя
						,_Fld17594	= @Отчество
						,_Fld17595	= @АдресРФ
						,_Fld17596RRef	= @ВидДокумента
						,_Fld17597	= @СерияДокумента
						,_Fld17598	= @НомерДокумента
						,_Fld17599	= @ОбщаяСуммаДохода
						,_Fld17600	= @ОблагаемаяСуммаДохода
						,_Fld17601	= @Исчислено
						,_Fld17602	= @Задолженность
						,_Fld17603	= @ИзлишнеУдержано
						,_Fld17604	= @Удержано
						,_Fld17605	= @Перечислено
						,_Fld17606	= @АдресЗарубежом
						,_Fld17607	= @ДатаРождения
						,_Fld17608	= @ИНН
						,_Fld17609RRef	= @Гражданство
						,_Fld17610RRef	= @СтатусНалогоплательщика
						,_Fld17611	= @ДатаУведомления
						,_Fld17612	= @НомерУведомления
						,_Fld17613	= @КодНалоговогоОрганаУведомления
						,_Fld17614	= @СпециальныйДокумент2011года
						,_Fld17615	= @КодИФНС
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
					Команда.CommandText = @"Delete _Document601
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}