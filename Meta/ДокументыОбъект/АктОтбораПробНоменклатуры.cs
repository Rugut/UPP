
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
	[ProtoContract]
	[DataContract]
	public partial class АктОтбораПробНоменклатуры:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийАктОтбораПробНоменклатуры ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public string/*(5)*/ Влажность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(200)*/ ЗамечанияКУпаковкеМаркировке {get;set;}//Замечания к упаковке и маркировке
		///<summary>
		///Заявка на сертификацию, на основании которой берутся пробы
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.ДокументыСсылка.ЗаявкаНаСертификациюНоменклатуры ЗаявкаНаСертификациюНоменклатуры {get;set;}//Заявка на сертификацию номенклатуры
		///<summary>
		///Количество отобранных образцов на испытания
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(15.3)*/ Испытания {get;set;}
		///<summary>
		///Количество групповых упаковок, вскрытых для отбора проб
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(10.3)*/ КоличествоВскрытыхУпаковок {get;set;}//Количество вскрытых упаковок
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Количество образцов контрольной пробы
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.3)*/ КонтрольнаяПроба {get;set;}//Контрольная проба
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		///<summary>
		///Нормативный документ, согласно которому осуществляется сертификация (для внутренней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры НормативныйДокумент {get;set;}//Нормативный документ
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Организация, проводящая отбор проб (для внешней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Контрагенты ОрганПоСертификации {get;set;}//Орган по сертификации
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public string/*(200)*/ РезультатНаружногоОсмотра {get;set;}//Результат наружного осмотра
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		///<summary>
		///Склад, с которого производится отбор проб
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(5)*/ Температура {get;set;}
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
						Insert Into _Document302(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4802RRef
						,_Fld4803
						,_Fld4804
						,_Fld4805RRef
						,_Fld4806
						,_Fld4807
						,_Fld4808
						,_Fld4809
						,_Fld4810RRef
						,_Fld4811RRef
						,_Fld4812RRef
						,_Fld4813RRef
						,_Fld4814RRef
						,_Fld4815RRef
						,_Fld4816
						,_Fld4817RRef
						,_Fld4818RRef
						,_Fld4819)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Влажность
						,@ЗамечанияКУпаковкеМаркировке
						,@ЗаявкаНаСертификациюНоменклатуры
						,@Испытания
						,@КоличествоВскрытыхУпаковок
						,@Комментарий
						,@КонтрольнаяПроба
						,@Номенклатура
						,@НормативныйДокумент
						,@Организация
						,@ОрганПоСертификации
						,@Ответственный
						,@Подразделение
						,@РезультатНаружногоОсмотра
						,@СерияНоменклатуры
						,@Склад
						,@Температура)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document302
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4802RRef	= @ВидОперации
						,_Fld4803	= @Влажность
						,_Fld4804	= @ЗамечанияКУпаковкеМаркировке
						,_Fld4805RRef	= @ЗаявкаНаСертификациюНоменклатуры
						,_Fld4806	= @Испытания
						,_Fld4807	= @КоличествоВскрытыхУпаковок
						,_Fld4808	= @Комментарий
						,_Fld4809	= @КонтрольнаяПроба
						,_Fld4810RRef	= @Номенклатура
						,_Fld4811RRef	= @НормативныйДокумент
						,_Fld4812RRef	= @Организация
						,_Fld4813RRef	= @ОрганПоСертификации
						,_Fld4814RRef	= @Ответственный
						,_Fld4815RRef	= @Подразделение
						,_Fld4816	= @РезультатНаружногоОсмотра
						,_Fld4817RRef	= @СерияНоменклатуры
						,_Fld4818RRef	= @Склад
						,_Fld4819	= @Температура
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Влажность", Влажность);
					Команда.Parameters.AddWithValue("ЗамечанияКУпаковкеМаркировке", ЗамечанияКУпаковкеМаркировке);
					Команда.Parameters.AddWithValue("ЗаявкаНаСертификациюНоменклатуры", ЗаявкаНаСертификациюНоменклатуры.Ссылка);
					Команда.Parameters.AddWithValue("Испытания", Испытания);
					Команда.Parameters.AddWithValue("КоличествоВскрытыхУпаковок", КоличествоВскрытыхУпаковок);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КонтрольнаяПроба", КонтрольнаяПроба);
					Команда.Parameters.AddWithValue("РезультатНаружногоОсмотра", РезультатНаружногоОсмотра);
					Команда.Parameters.AddWithValue("Температура", Температура);
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
					Команда.CommandText = @"Delete _Document302
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}