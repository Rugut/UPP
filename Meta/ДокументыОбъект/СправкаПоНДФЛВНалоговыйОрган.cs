
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
	public partial class СправкаПоНДФЛВНалоговыйОрган:ДокументОбъект
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
		public decimal/*(4)*/ НалоговыйПериод {get;set;}//Налоговый период
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(21)*/ ОКАТО_КПП {get;set;}//ОКАТО/КПП
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ОснованияДляПредставленияСправок2НДФЛ ОснованиеДляПредставленияСправок {get;set;}//Основание для представления справок
		[DataMember]
		[ProtoMember(13)]
		public string/*(84)*/ ИмяФайла {get;set;}//Имя файла
		[DataMember]
		[ProtoMember(14)]
		public string/*(20)*/ Телефон {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ФизическиеЛица СправкуПодписал {get;set;}//Справку подписал
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьПодписавшегоЛица {get;set;}//Должность подписавшего лица
		[DataMember]
		[ProtoMember(18)]
		public bool ПринятоНалоговымОрганом {get;set;}//Принято в ИФНС
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Ведет себя по правилам 2010 года.
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool СпециальныйДокумент2011года {get;set;}//Специальный документ 2011 года
		[DataMember]
		[ProtoMember(23)]
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
						Insert Into _Document23174(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld25454
						,_Fld25455RRef
						,_Fld25456
						,_Fld25457RRef
						,_Fld25458
						,_Fld25459
						,_Fld25460RRef
						,_Fld25461RRef
						,_Fld25462RRef
						,_Fld25463
						,_Fld25464
						,_Fld25465RRef
						,_Fld25466
						,_Fld25467
						,_Fld25468)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@НалоговыйПериод
						,@Организация
						,@ОКАТО_КПП
						,@ОснованиеДляПредставленияСправок
						,@ИмяФайла
						,@Телефон
						,@ГлавныйБухгалтер
						,@СправкуПодписал
						,@ДолжностьПодписавшегоЛица
						,@ПринятоНалоговымОрганом
						,@КраткийСоставДокумента
						,@Ответственный
						,@Комментарий
						,@СпециальныйДокумент2011года
						,@КодИФНС)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23174
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld25454	= @НалоговыйПериод
						,_Fld25455RRef	= @Организация
						,_Fld25456	= @ОКАТО_КПП
						,_Fld25457RRef	= @ОснованиеДляПредставленияСправок
						,_Fld25458	= @ИмяФайла
						,_Fld25459	= @Телефон
						,_Fld25460RRef	= @ГлавныйБухгалтер
						,_Fld25461RRef	= @СправкуПодписал
						,_Fld25462RRef	= @ДолжностьПодписавшегоЛица
						,_Fld25463	= @ПринятоНалоговымОрганом
						,_Fld25464	= @КраткийСоставДокумента
						,_Fld25465RRef	= @Ответственный
						,_Fld25466	= @Комментарий
						,_Fld25467	= @СпециальныйДокумент2011года
						,_Fld25468	= @КодИФНС
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("НалоговыйПериод", НалоговыйПериод);
					Команда.Parameters.AddWithValue("ОКАТО_КПП", ОКАТО_КПП);
					Команда.Parameters.AddWithValue("ОснованиеДляПредставленияСправок", ОснованиеДляПредставленияСправок.Ключ());
					Команда.Parameters.AddWithValue("ИмяФайла", ИмяФайла);
					Команда.Parameters.AddWithValue("Телефон", Телефон);
					Команда.Parameters.AddWithValue("ПринятоНалоговымОрганом", ПринятоНалоговымОрганом);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document23174
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}