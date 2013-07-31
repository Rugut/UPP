Ext.require(['Данные.Справочники.СохраненныеНастройки'], function () 
{
	Ext.define('Справочники.СохраненныеНастройки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:343px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вариант отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Пользователи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:152px;width:327px;height:151px;',
			height: 151,width: 327,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'222',
					dataIndex:'Пользователь',
					flex:1,
				},
				{
					text:'Право изменения',
					width:'63',
					dataIndex:'ПравоИзменения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СохраненныеНастройки").data,
					fields: ['НомерСтроки','Пользователь','ПравоИзменения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Пользователь',
					},
					{
						name:'ПравоИзменения',
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
						var грид = Ext.getCmp('Пользователи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СохраненныеНастройки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СохраненныеНастройки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Пользователи',
			style: 'position:absolute;left:8px;top:112px;width:327px;height:13px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 240,
			height: 19,
			style: 'position:absolute;left:95px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеНастройки',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:6px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:30px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:95px;top:30px;width:240px;height:72px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:128px;width:327px;height:24px;',
			items:
			[
				{
					text:'Пользователя',
				},
				{
					text:'Группу пользователей',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:343px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Настройка по умолчанию',
				},
				{
					text:'Загрузить настройку из файла',
				},
				{
					text:'Сохранить настройку в файл',
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