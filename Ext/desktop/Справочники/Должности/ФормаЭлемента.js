Ext.require(['Данные.Справочники.Должности'], function () 
{
	Ext.define('Справочники.Должности.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:446px;height:424px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Должность',
	
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
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 212,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:212px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:430px;height:334px;',
			height: 334,width: 430,
			items:
			[
				{
					title:'Описание должности',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Требования',
			style: 'position:absolute;left:6px;top:25px;width:416px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТребования',
			text: 'Требования:',
			style: 'position:absolute;left:6px;top:6px;width:416px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбязанности',
			text: 'Обязанности:',
			style: 'position:absolute;left:6px;top:100px;width:416px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Обязанности',
			style: 'position:absolute;left:6px;top:119px;width:416px;height:70px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Условия',
			style: 'position:absolute;left:6px;top:213px;width:416px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловия',
			text: 'Условия:',
			style: 'position:absolute;left:6px;top:194px;width:416px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкетаРезюмеКандидата',
			text: 'Анкета резюме кандидата:',
			style: 'position:absolute;left:6px;top:289px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'АнкетаРезюмеКандидата.Представление',
			width: 272,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:150px;top:289px;width:272px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Должности.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Должности.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Должности.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Должности.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					title:'Компетенции',
					items:
					[
		{
			id: 'Компетенции',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:416px;height:249px;',
			height: 249,width: 416,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Компетенция',
					width:'180',
					dataIndex:'Компетенция',
					flex:1,
				},
				{
					text:'Должность',
					width:'0',
					dataIndex:'Должность',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Должности").data,
					fields: ['Картинка','Компетенция','Должность',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Должности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Компетенция',
					},
					{
						name:'Должность',
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
						var грид = Ext.getCmp('Компетенции');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Должности.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Должности.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:446px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:446px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
	]
	});
});