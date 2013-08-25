Ext.require(['Данные.Справочники.Организации'], function () 
{
	Ext.define('Справочники.Организации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:579px;height:669px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Организации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:470px;top:33px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:507px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 332,
			height: 19,
			style: 'position:absolute;left:134px;top:33px;width:332px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрефикс',
			text: 'Префикс:',
			style: 'position:absolute;left:222px;top:57px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Префикс',
			width: 40,
			height: 19,
			style: 'position:absolute;left:279px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:579px;height:25px;',
			width: 579,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Настройка доступа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:644px;width:579px;height:25px;',
			width: 579,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГоловнаяОрганизация',
			text: 'Головная организация:',
			style: 'position:absolute;left:8px;top:280px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ГоловнаяОрганизация.Представление',
			width: 437,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:66px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:134px;top:81px;width:437px;height:66px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойБанковскийСчет',
			text: 'Осн. банковский счет:',
			style: 'position:absolute;left:8px;top:304px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОсновнойБанковскийСчет.Представление',
			width: 437,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:134px;top:304px;width:437px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:331px;width:563px;height:305px;',
			height: 305,width: 563,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:21px;top:25px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИНН',
			width: 98,
			height: 19,
			style: 'position:absolute;left:107px;top:25px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:244px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			width: 100,
			height: 19,
			style: 'position:absolute;left:350px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Реквизиты',
			style: 'position:absolute;left:7px;top:6px;width:548px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьКодИМНС',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:21px;top:92px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС',
			width: 49,
			height: 19,
			style: 'position:absolute;left:107px;top:92px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Серия и №:',
			style: 'position:absolute;left:194px;top:139px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидетельствоСерияНомер',
			width: 300,
			height: 19,
			style: 'position:absolute;left:255px;top:139px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:21px;top:139px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СвидетельствоДатаВыдачи',
			width: 75,
			height: 19,
			style: 'position:absolute;left:107px;top:139px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвидетельствоНаименованиеОргана',
			text: 'Наименование:',
			style: 'position:absolute;left:104px;top:178px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидетельствоНаименованиеОргана',
			width: 367,
			height: 19,
			style: 'position:absolute;left:188px;top:178px;width:367px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСвидетельствоКодОргана',
			text: 'Код:',
			style: 'position:absolute;left:22px;top:178px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СвидетельствоКодОргана',
			width: 34,
			height: 19,
			style: 'position:absolute;left:57px;top:178px;width:34px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Налоговый орган, выдавший свидетельство',
			style: 'position:absolute;left:13px;top:160px;width:542px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Свидетельство о постановке на учет в налоговом органе',
			style: 'position:absolute;left:6px;top:120px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРегистрации',
			text: 'Дата гос. регистрации:',
			style: 'position:absolute;left:242px;top:49px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРегистрации',
			width: 77,
			height: 19,
			style: 'position:absolute;left:373px;top:49px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:21px;top:49px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН',
			width: 98,
			height: 19,
			style: 'position:absolute;left:107px;top:49px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Наим. ИФНС:',
			style: 'position:absolute;left:178px;top:92px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеИМНС',
			width: 300,
			height: 19,
			style: 'position:absolute;left:255px;top:92px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'ИФНС',
			style: 'position:absolute;left:6px;top:74px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Нумерация счетов-фактур',
			style: 'position:absolute;left:6px;top:204px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьЦифровойИндексОбособленногоПодразделения',
			text: 'Цифровой индекс обособленного подразделения:',
			style: 'position:absolute;left:21px;top:225px;width:260px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЦифровойИндексОбособленногоПодразделения',
			style: 'position:absolute;left:288px;top:225px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'КонтактнаяИнформация',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:549px;height:246px;',
			height: 246,width: 549,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип',
					width:'120',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Вид',
					width:'120',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Представление',
					width:'120',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Организации").data,
					fields: ['Ссылка','Картинка','Тип','Вид','Представление','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Организации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Тип',
					},
					{
						name:'Вид',
					},
					{
						name:'Представление',
					},
					{
						name:'Комментарий',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('КонтактнаяИнформация');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:7px;width:549px;height:24px;',
			width: 549,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Основная',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО',
			text: 'ОКПО:',
			style: 'position:absolute;left:216px;top:25px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКПО',
			width: 107,
			height: 19,
			style: 'position:absolute;left:257px;top:25px;width:107px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКАТО',
			text: 'ОКАТО:',
			style: 'position:absolute;left:17px;top:25px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:72px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОКОПФ',
			width: 28,
			height: 19,
			style: 'position:absolute;left:66px;top:72px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Наименование:',
			style: 'position:absolute;left:147px;top:72px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеОКОПФ',
			width: 324,
			height: 19,
			style: 'position:absolute;left:231px;top:72px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Организационно-правовая форма по ОКОПФ',
			style: 'position:absolute;left:6px;top:53px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:118px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОКОПФ1',
			width: 28,
			height: 19,
			style: 'position:absolute;left:66px;top:118px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Наименование:',
			style: 'position:absolute;left:147px;top:118px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеОКОПФ1',
			width: 324,
			height: 19,
			style: 'position:absolute;left:231px;top:118px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Форма собственности по ОКФС',
			style: 'position:absolute;left:6px;top:99px;width:549px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Вид деятельности по ОКВЭД',
			style: 'position:absolute;left:6px;top:145px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Код:',
			style: 'position:absolute;left:17px;top:164px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОКОПФ2',
			width: 73,
			height: 19,
			style: 'position:absolute;left:66px;top:164px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Наименование:',
			style: 'position:absolute;left:148px;top:164px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеОКОПФ2',
			width: 324,
			height: 19,
			style: 'position:absolute;left:231px;top:164px;width:324px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Коды',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьКодОКОНХ',
			text: 'ОКОНХ:',
			style: 'position:absolute;left:412px;top:25px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОКОНХ',
			width: 91,
			height: 19,
			style: 'position:absolute;left:464px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПоОКАТО',
			width: 100,
			height: 19,
			style: 'position:absolute;left:66px;top:25px;width:100px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерПФР',
			text: '№ в ПФР:',
			style: 'position:absolute;left:12px;top:130px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерПФР',
			width: 110,
			height: 19,
			style: 'position:absolute;left:88px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициент',
			text: 'Районный коэффициент (местный):',
			style: 'position:absolute;left:6px;top:31px;width:185px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:216px;top:31px;width:82px;height:19px;',
			width: 82,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициентРФ',
			text: 'Районный коэффициент (федеральный):',
			style: 'position:absolute;left:6px;top:56px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РайонныйКоэффициентРФ',
			style: 'position:absolute;left:216px;top:56px;width:82px;height:19px;',
			width: 82,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерФСС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:88px;top:178px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: '№ в ФСС:',
			style: 'position:absolute;left:12px;top:178px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТерриториальныеУсловияПФР',
			text: 'Территориальные условия ПФР:',
			style: 'position:absolute;left:6px;top:81px;width:181px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТерриториальныеУсловияПФР.Представление',
			width: 82,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:216px;top:81px;width:82px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Внебюджетные фонды',
			style: 'position:absolute;left:6px;top:108px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидСтавокЕСНиПФР.Представление',
			width: 339,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:216px;top:6px;width:339px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Шкала ставок ЕСН, взносов в ПФР:',
			style: 'position:absolute;left:6px;top:6px;width:208px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаПФР',
			text: 'Наименование территориального ПФР (краткое):',
			style: 'position:absolute;left:12px;top:154px;width:257px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеТерриториальногоОрганаПФР',
			width: 258,
			height: 19,
			style: 'position:absolute;left:297px;top:154px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОрганаПФР',
			text: 'Код органа ПФР:',
			style: 'position:absolute;left:205px;top:130px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОрганаПФР',
			width: 110,
			height: 19,
			style: 'position:absolute;left:297px;top:130px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Доп. код ФСС:',
			style: 'position:absolute;left:205px;top:178px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подч-ти ФСС:',
			style: 'position:absolute;left:408px;top:178px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодФСС',
			width: 104,
			height: 19,
			style: 'position:absolute;left:297px;top:178px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПодчиненностиФСС',
			width: 50,
			height: 19,
			style: 'position:absolute;left:505px;top:178px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			width: 258,
			height: 19,
			style: 'position:absolute;left:297px;top:202px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:12px;top:202px;width:257px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: '№ в ТФОМС:',
			style: 'position:absolute;left:12px;top:225px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РегистрационныйНомерТФОМС',
			width: 110,
			height: 19,
			style: 'position:absolute;left:88px;top:221px;width:110px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Сведения о регистрации предпринимателя, как плательщика страховых взносов за самого себя (пп. 2 п. 1 ст. 5 Федерального закона от 24.07.2009 № 212-ФЗ).',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:28px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:40px;width:555px;height:130px;',
			height: 130,width: 555,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерПФР',
			text: 'Регистрационный номер в ПФР:',
			style: 'position:absolute;left:0px;top:0px;width:169px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИПРегистрационныйНомерПФР',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерФСС',
			text: 'Регистрационный номер в ФСС:',
			style: 'position:absolute;left:0px;top:82px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИПРегистрационныйНомерФСС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:82px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПКодПодчиненностиФСС',
			text: 'Код подчиненности ФСС:',
			style: 'position:absolute;left:0px;top:108px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИПКодПодчиненностиФСС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:108px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИПРегистрационныйНомерТФОМС',
			text: 'Регистрационный номер в ТФОМС:',
			style: 'position:absolute;left:0px;top:26px;width:184px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИПРегистрационныйНомерТФОМС',
			width: 120,
			height: 19,
			style: 'position:absolute;left:198px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Сведения о регистрации предпринимателя, добровольно вступившего в правоотношения по обязательному социальному страхованию (п. 5 ст. 14 Федерального закона от 24.07.2009 № 212-ФЗ).',
			style: 'position:absolute;left:0px;top:50px;width:555px;height:28px;',
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучете',
			text: 'НадписьОтражениеВБухучете',
			style: 'position:absolute;left:33px;top:54px;width:477px;height:94px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВБухучетеИзменить',
			text: 'Задать бухучет зарплаты для организации',
			style: 'position:absolute;left:33px;top:150px;width:391px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОтраженияВУчете',
			text: 'Бухучет зарплаты организации следует задавать в том случае, если зарплата всех сотрудников полностью относится к видам деятельности облагаемым ЕНВД, или в информационной базе ведется расчет зарплаты нескольких организаций.',
			style: 'position:absolute;left:33px;top:6px;width:477px;height:45px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтранаРегистрации',
			text: 'Страна регистрации:',
			style: 'position:absolute;left:6px;top:6px;width:231px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтранаРегистрации.Представление',
			width: 315,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:240px;top:7px;width:315px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКодВСтранеРегистрации',
			text: 'Код налогоплательщика в стране регистр.:',
			style: 'position:absolute;left:6px;top:56px;width:230px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодВСтранеРегистрации',
			width: 315,
			height: 19,
			style: 'position:absolute;left:240px;top:57px;width:315px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтранаПостоянногоМестонахождения',
			text: 'Страна постоянного местонахождения:',
			style: 'position:absolute;left:6px;top:31px;width:232px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтранаПостоянногоМестонахождения.Представление',
			width: 315,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:240px;top:32px;width:315px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Полное наименование иностранной организации:',
			style: 'position:absolute;left:6px;top:81px;width:263px;height:16px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеИнострОрганизации',
			width: 549,
			height: 53,
			style: 'position:absolute;left:6px;top:99px;width:549px;height:53px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:85px;width:549px;height:19px;',
			height: 19,width: 549,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'УчетнаяЗаписьОбмена.Представление',
			width: 424,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:125px;top:0px;width:424px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Учетная запись:',
			style: 'position:absolute;left:15px;top:2px;width:90px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:7px;top:178px;width:548px;height:18px;',
			height: 18,width: 548,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Перед началом использования данной возможности необходимо настроить',
			style: 'position:absolute;left:13px;top:1px;width:390px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметрыИнтеграции',
			text: 'параметры интеграции.',
			style: 'position:absolute;left:404px;top:1px;width:124px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Документооборот с ФСС',
			style: 'position:absolute;left:6px;top:234px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'КнопкаНастроитьПараметрыОтправки',
			text: 'Настроить параметры отправки отчетности в ФСС...',
			style: 'position:absolute;left:21px;top:257px;width:279px;height:21px;',
		},
		{
			xtype: 'label',
			text: 'Документооборот с ФНС, ПФР и Росстатом',
			style: 'position:absolute;left:6px;top:35px;width:549px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСформироватьЗаявлениеНаПодключениеКЭлектронномуДокументообороту',
			text: 'Заявление на подключение к электронному документообороту',
			style: 'position:absolute;left:6px;top:10px;width:354px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСписокЗаявлений',
			text: 'Список заявлений',
			style: 'position:absolute;left:430px;top:10px;width:98px;height:21px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Возможность взаимодействия с ФНС, ПФР и Росстатом по электронным каналам связи отключена',
			style: 'position:absolute;left:6px;top:203px;width:549px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать возможность представления отчетности в ФНС посредством ПК "Спринтер"',
			style: 'position:absolute;left:6px;top:112px;width:549px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать встроенный механизм информационного взаимодействия по каналам связи',
			style: 'position:absolute;left:6px;top:58px;width:549px;height:15px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'отражать в регламентированном учете',
			style: 'position:absolute;left:6px;top:8px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:6px;top:33px;width:549px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Реквизит "Код налогового органа - получателя отчетности" заполняется только для тех налогоплательщиков, вся отчетность которых, согласно статье 80 НК РФ, должна представляться в налоговый орган по месту их регистрации в качестве крупнейших. \r\nВо всех остальных случаях реквизит не заполняется.\r\nДанный код необходим для формирования файлов электронного представления отчетов в формате ФНС.',
			style: 'position:absolute;left:6px;top:93px;width:549px;height:69px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Код налогового органа - получателя отчетности:',
			style: 'position:absolute;left:6px;top:72px;width:270px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИФНСПолучателя',
			width: 54,
			height: 19,
			style: 'position:absolute;left:289px;top:71px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Данная возможность позволяет представлять отчетность в налоговые органы посредством вызова программного комплекса "Спринтер" компании "Такском", который и будет осуществлять предусмотренный регламентом документооборот.',
			style: 'position:absolute;left:21px;top:133px;width:534px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодОрганаФСГС',
			text: 'Код территориального органа Федеральной службы государственной статистики:',
			style: 'position:absolute;left:6px;top:41px;width:270px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодОрганаФСГС',
			width: 54,
			height: 19,
			style: 'position:absolute;left:289px;top:41px;width:54px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'119',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Организации").data,
					fields: ['Ссылка','ПометкаУдаления','Свойство','Значение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Организации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
			width: 549,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:549px;height:249px;',
			height: 249,width: 549,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'220',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Организации").data,
					fields: ['Ссылка','ПометкаУдаления','Принадлежность','Категория',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Организации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:549px;height:24px;',
			width: 549,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНалоги',
			text: 'Наименование плательщика в платежных поручениях на перечисление в бюджет:',
			style: 'position:absolute;left:8px;top:209px;width:124px;height:66px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПлательщикаПриПеречисленииНалогов',
			style: 'position:absolute;left:134px;top:209px;width:437px;height:66px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отделение иностранной организации (зависимый агент)',
			style: 'position:absolute;left:134px;top:191px;width:423px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЮрФизЛицо',
			text: 'Юр. / физ. лицо:',
			style: 'position:absolute;left:8px;top:57px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЮрФизЛицо.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:134px;top:57px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИндивидуальныйПредприниматель',
			text: 'Физическое лицо:',
			style: 'position:absolute;left:8px;top:280px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ИндивидуальныйПредприниматель.Представление',
			width: 437,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:134px;top:280px;width:437px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Организации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Организации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеСокращенное',
			text: 'Наименование сокращенное:',
			style: 'position:absolute;left:8px;top:152px;width:120px;height:34px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеСокращенное',
			width: 437,
			height: 34,
			style: 'position:absolute;left:134px;top:152px;width:437px;height:34px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});