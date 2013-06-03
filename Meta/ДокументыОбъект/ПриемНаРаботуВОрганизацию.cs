
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
	///(Регл) Прием на работу в организацию
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПриемНаРаботуВОрганизацию:ДокументОбъект
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(5.2)*/ УдалитьРайонныйКоэффициент {get;set;}//районный коэффициент
		[DataMember]
		[ProtoMember(13)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыЗанятостиВОрганизации УдалитьВидЗанятости {get;set;}//Удалить вид занятости
		[DataMember]
		[ProtoMember(15)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		[DataMember]
		[ProtoMember(16)]
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию ИсправляемыйДокумент {get;set;}//Исправляемый документ
		[DataMember]
		[ProtoMember(17)]
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
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
						Insert Into _Document537(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld14553RRef
						,_Fld14554
						,_Fld14555RRef
						,_Fld14556
						,_Fld14557
						,_Fld14558RRef
						,_Fld14559
						,_Fld14560RRef
						,_Fld14561)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@УдалитьРайонныйКоэффициент
						,@КраткийСоставДокумента
						,@УдалитьВидЗанятости
						,@ДанныеПрошлойВерсии
						,@ИсправляемыйДокумент
						,@ДвиженияИсправляемогоДокумента)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document537
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld14553RRef	= @Организация
						,_Fld14554	= @Комментарий
						,_Fld14555RRef	= @Ответственный
						,_Fld14556	= @УдалитьРайонныйКоэффициент
						,_Fld14557	= @КраткийСоставДокумента
						,_Fld14558RRef	= @УдалитьВидЗанятости
						,_Fld14559	= @ДанныеПрошлойВерсии
						,_Fld14560RRef	= @ИсправляемыйДокумент
						,_Fld14561	= @ДвиженияИсправляемогоДокумента
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УдалитьРайонныйКоэффициент", УдалитьРайонныйКоэффициент);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("УдалитьВидЗанятости", УдалитьВидЗанятости.Ключ());
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
					Команда.Parameters.AddWithValue("ИсправляемыйДокумент", ИсправляемыйДокумент.Ссылка);
					Команда.Parameters.AddWithValue("ДвиженияИсправляемогоДокумента",new byte[0]);
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
					Команда.CommandText = @"Delete _Document537
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}