Ext.require(['Данные.Документы.РегламентированныйОтчет'], function () 
{
	Ext.define('Документы.РегламентированныйОтчет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:688px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регламентированные отчеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:116px;width:672px;height:277px;',
			height: 277,width: 672,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'222',
					dataIndex:'НаименованиеОтчета',
					flex:1,
				},
				{
					text:'Период',
					width:'98',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'88',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'88',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'56',
					dataIndex:'КодИМНС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчет/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НаименованиеОтчета',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'КодИМНС',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РегламентированныйОтчет.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныйОтчет.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			width: 688,
			height: 25,
			items:
			[
				{
					text:'Новый',
					tooltip:'Показать справочник отчетов',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Журнал выгрузки',
					tooltip:'Журнал выгрузки',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация.Представление',
			width: 573,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:107px;top:36px;width:573px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РегламентированныйОтчет.ФормаСпискаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентированныйОтчет.ФормаСпискаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РегламентированныйОтчет.ФормаСпискаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РегламентированныйОтчет.ФормаСпискаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода1',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:397px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода1',
			width: 570,
			height: 19,
			style: 'position:absolute;left:110px;top:398px;width:570px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:17px;top:36px;width:87px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:107px;top:61px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:107px;top:86px;width:119px;height:19px;',
			width: 119,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Форма:',
			style: 'position:absolute;left:17px;top:61px;width:86px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'ИФНС:',
			style: 'position:absolute;left:372px;top:61px;width:55px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:428px;top:61px;width:61px;height:19px;',
			width: 61,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Период:',
			style: 'position:absolute;left:17px;top:86px;width:87px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:238px;top:80px;width:257px;height:31px;',
			height: 31,width: 257,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: 'НадписьПериодСоставленияОтчета',
			style: 'position:absolute;left:33px;top:6px;width:190px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода2',
			text: '...',
			style: 'position:absolute;left:231px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериодаОтчета',
			width: 80,
			height: 19,
			style: 'position:absolute;left:21px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода6',
			text: 'по',
			style: 'position:absolute;left:111px;top:6px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонцаПериодаОтчета',
			width: 80,
			height: 19,
			style: 'position:absolute;left:134px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода7',
			text: 'с',
			style: 'position:absolute;left:6px;top:6px;width:15px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод2',
			text: '',
			style: 'position:absolute;left:13px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод2',
			text: '',
			style: 'position:absolute;left:229px;top:6px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});