Ext.require(['Данные.Обработки.КонструкторПользовательскихПолей'], function () 
{
	Ext.define('Обработки.КонструкторПользовательскихПолей.ФормаФормула',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Пользовательское поле ""Формула""',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:341px;top:124px;width:143px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормула',
			text: 'Формула:',
			style: 'position:absolute;left:252px;top:37px;width:54px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтоги',
			text: 'Итоги:',
			style: 'position:absolute;left:252px;top:128px;width:54px;height:15px;',
		},
		{
			id: 'ДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:234px;height:310px;',
			height: 310,width: 234,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторПользовательскихПолей/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
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
						var грид = Ext.getCmp('ДоступныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КонструкторПользовательскихПолей.ФормаФормулаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонструкторПользовательскихПолей.ФормаФормулаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:251px;top:7px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 291,
			height: 19,
			style: 'position:absolute;left:341px;top:7px;width:291px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:640px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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