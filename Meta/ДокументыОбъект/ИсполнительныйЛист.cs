
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
	public partial class ИсполнительныйЛист:ДокументОбъект
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
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(30)*/ ВидИсполнительногоДокумента {get;set;}//Вид исполнительного документа
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ РеквизитыИсполнительногоДокумента {get;set;}//Реквизиты исполнительного документа
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Контрагенты Получатель {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаУдержанийПоИЛ СпособРасчетаУдержания {get;set;}//Способ расчета удержания
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.2)*/ Размер {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10.2)*/ Предел {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.ПрожиточныеМинимумы ПрожиточныйМинимум {get;set;}//Прожиточный минимум
		[DataMember]
		[ProtoMember(20)]
		public DateTime ДатаДействия {get;set;}//Дата действия
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(5.2)*/ ПроцентПочтовогоСбора {get;set;}//Процент почтового сбора
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ТарифыПочтовогоСбора Тариф {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.СпособыПеречисленийПоИсполнительномуЛисту СпособПеречисленияПоИсполнительномуЛисту {get;set;}//Способ перечисления по исполнительному листу
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.ТарифыБанковНаДенежныеПереводы ТарифБанкаНаДенежныеПереводы {get;set;}//Тариф банка на денежные переводы
		[DataMember]
		[ProtoMember(25)]
		public bool ПочтовыйСборРассчитыватьПроцентом {get;set;}//Почтовый сбор рассчитывать процентом
		[DataMember]
		[ProtoMember(26)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///1 - процентом, 2 - фиксированной суммой
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public decimal/*(1)*/ УдалитьСпособРасчетаИЛ {get;set;}//Удалить способ расчета ИЛ
		///<summary>
		///0 - процентом, 1 - не начислять, 2 - по шкале
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public decimal/*(1)*/ УдалитьСпособРасчетаПС {get;set;}//Способ расчета почтового сбора
		[DataMember]
		[ProtoMember(31)]
		public bool УдалитьУчитыватьБольничныеЛисты {get;set;}//Удалить учитывать больничные листы
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
						Insert Into _Document294(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld5341RRef
						,_Fld5342RRef
						,_Fld5343
						,_Fld5344
						,_Fld5345RRef
						,_Fld5346
						,_Fld5347
						,_Fld26788RRef
						,_Fld5349
						,_Fld5350
						,_Fld26789RRef
						,_Fld5354
						,_Fld5355
						,_Fld26790RRef
						,_Fld26791RRef
						,_Fld26792RRef
						,_Fld26793
						,_Fld26794
						,_Fld5352RRef
						,_Fld5353
						,_Fld5348
						,_Fld26795
						,_Fld5351)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Физлицо
						,@Организация
						,@ВидИсполнительногоДокумента
						,@РеквизитыИсполнительногоДокумента
						,@Получатель
						,@ДатаНачала
						,@ДатаОкончания
						,@СпособРасчетаУдержания
						,@Размер
						,@Предел
						,@ПрожиточныйМинимум
						,@ДатаДействия
						,@ПроцентПочтовогоСбора
						,@Тариф
						,@СпособПеречисленияПоИсполнительномуЛисту
						,@ТарифБанкаНаДенежныеПереводы
						,@ПочтовыйСборРассчитыватьПроцентом
						,@ДанныеПрошлойВерсии
						,@Ответственный
						,@Комментарий
						,@УдалитьСпособРасчетаИЛ
						,@УдалитьСпособРасчетаПС
						,@УдалитьУчитыватьБольничныеЛисты)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document294
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld5341RRef	= @Физлицо
						,_Fld5342RRef	= @Организация
						,_Fld5343	= @ВидИсполнительногоДокумента
						,_Fld5344	= @РеквизитыИсполнительногоДокумента
						,_Fld5345RRef	= @Получатель
						,_Fld5346	= @ДатаНачала
						,_Fld5347	= @ДатаОкончания
						,_Fld26788RRef	= @СпособРасчетаУдержания
						,_Fld5349	= @Размер
						,_Fld5350	= @Предел
						,_Fld26789RRef	= @ПрожиточныйМинимум
						,_Fld5354	= @ДатаДействия
						,_Fld5355	= @ПроцентПочтовогоСбора
						,_Fld26790RRef	= @Тариф
						,_Fld26791RRef	= @СпособПеречисленияПоИсполнительномуЛисту
						,_Fld26792RRef	= @ТарифБанкаНаДенежныеПереводы
						,_Fld26793	= @ПочтовыйСборРассчитыватьПроцентом
						,_Fld26794	= @ДанныеПрошлойВерсии
						,_Fld5352RRef	= @Ответственный
						,_Fld5353	= @Комментарий
						,_Fld5348	= @УдалитьСпособРасчетаИЛ
						,_Fld26795	= @УдалитьСпособРасчетаПС
						,_Fld5351	= @УдалитьУчитыватьБольничныеЛисты
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидИсполнительногоДокумента", ВидИсполнительногоДокумента);
					Команда.Parameters.AddWithValue("РеквизитыИсполнительногоДокумента", РеквизитыИсполнительногоДокумента);
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("СпособРасчетаУдержания", СпособРасчетаУдержания.Ключ());
					Команда.Parameters.AddWithValue("Размер", Размер);
					Команда.Parameters.AddWithValue("Предел", Предел);
					Команда.Parameters.AddWithValue("ДатаДействия", ДатаДействия);
					Команда.Parameters.AddWithValue("ПроцентПочтовогоСбора", ПроцентПочтовогоСбора);
					Команда.Parameters.AddWithValue("СпособПеречисленияПоИсполнительномуЛисту", СпособПеречисленияПоИсполнительномуЛисту.Ключ());
					Команда.Parameters.AddWithValue("ПочтовыйСборРассчитыватьПроцентом", ПочтовыйСборРассчитыватьПроцентом);
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УдалитьСпособРасчетаИЛ", УдалитьСпособРасчетаИЛ);
					Команда.Parameters.AddWithValue("УдалитьСпособРасчетаПС", УдалитьСпособРасчетаПС);
					Команда.Parameters.AddWithValue("УдалитьУчитыватьБольничныеЛисты", УдалитьУчитыватьБольничныеЛисты);
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
					Команда.CommandText = @"Delete _Document294
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}