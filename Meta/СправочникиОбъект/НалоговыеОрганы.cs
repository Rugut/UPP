
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class НалоговыеОрганы:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public V82.СправочникиСсылка.НалоговыеОрганы Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*4*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*120*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.ВидыНалоговыхОрганов Вид {get;set;}//Вид налогового органа
		[DataMember]
		[ProtoMember(10)]
		public string/*(250)*/ ПолноеНаименование {get;set;}//Полное наименование
		[DataMember]
		[ProtoMember(11)]
		public bool УчетНалогоплательщиков {get;set;}//Учет налогоплательщиков
		[DataMember]
		[ProtoMember(12)]
		public bool ПриемНалоговойОтчетности {get;set;}//Прием налоговой отчетности
		[DataMember]
		[ProtoMember(13)]
		public string/*(10)*/ ИНН {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public string/*(9)*/ КПП {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public string/*(128)*/ Адрес {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public string/*(64)*/ Телефон {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(64)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		[DataMember]
		[ProtoMember(18)]
		public string/*(64)*/ АдресСайта {get;set;}//Адрес сайта
		[DataMember]
		[ProtoMember(19)]
		public string/*(250)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public string/*(40)*/ УдалитьСертификат {get;set;}//Удалить сертификат
		[DataMember]
		[ProtoMember(21)]
		public string/*(254)*/ АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками {get;set;}//Адрес электронной почты для целей документооборота с налогоплательщиками
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference23107(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Code
						,_Description
						,_Fld23549RRef
						,_Fld23550
						,_Fld23551
						,_Fld23552
						,_Fld23553
						,_Fld23554
						,_Fld23555
						,_Fld23556
						,_Fld23557
						,_Fld23558
						,_Fld23559
						,_Fld23560
						,_Fld23561)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@Код
						,@Наименование
						,@Вид
						,@ПолноеНаименование
						,@УчетНалогоплательщиков
						,@ПриемНалоговойОтчетности
						,@ИНН
						,@КПП
						,@Адрес
						,@Телефон
						,@АдресЭлектроннойПочты
						,@АдресСайта
						,@Комментарий
						,@УдалитьСертификат
						,@АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference23107
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld23549RRef	= @Вид
						,_Fld23550	= @ПолноеНаименование
						,_Fld23551	= @УчетНалогоплательщиков
						,_Fld23552	= @ПриемНалоговойОтчетности
						,_Fld23553	= @ИНН
						,_Fld23554	= @КПП
						,_Fld23555	= @Адрес
						,_Fld23556	= @Телефон
						,_Fld23557	= @АдресЭлектроннойПочты
						,_Fld23558	= @АдресСайта
						,_Fld23559	= @Комментарий
						,_Fld23560	= @УдалитьСертификат
						,_Fld23561	= @АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Вид", Вид.Ссылка);
					Команда.Parameters.AddWithValue("ПолноеНаименование", ПолноеНаименование);
					Команда.Parameters.AddWithValue("УчетНалогоплательщиков", УчетНалогоплательщиков);
					Команда.Parameters.AddWithValue("ПриемНалоговойОтчетности", ПриемНалоговойОтчетности);
					Команда.Parameters.AddWithValue("ИНН", ИНН);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.Parameters.AddWithValue("Адрес", Адрес);
					Команда.Parameters.AddWithValue("Телефон", Телефон);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочты", АдресЭлектроннойПочты);
					Команда.Parameters.AddWithValue("АдресСайта", АдресСайта);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УдалитьСертификат", УдалитьСертификат);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками", АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками);
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
					Команда.CommandText = @"Delete _Reference23107
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}