Ext.require(['Данные.Справочники.ДетализацияОтчетаОПрибыляхИУбытках'], function () 
{
	Ext.define('Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Детализация отчета о прибылях и убытках',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 179,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код:',
			style: 'position:absolute;left:276px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 81,
			height: 19,
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Статьи оборотов',
			style: 'position:absolute;left:8px;top:103px;width:390px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:119px;width:390px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			id: 'ОтборСтатейОборотов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:143px;width:390px;height:160px;',
			height: 160,width: 390,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'220',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Знак',
					width:'40',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДетализацияОтчетаОПрибыляхИУбытках").data,
					fields: ['НомерСтроки','СтатьяОборотов','Знак',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДетализацияОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Знак',
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
						var грид = Ext.getCmp('ОтборСтатейОборотов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:55px;width:304px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляОтчета',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:55px;width:84px;height:27px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:406px;height:25px;',
			dock: 'bottom',
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
	]
	});
});