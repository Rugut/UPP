Ext.require(['Данные.Справочники.СтатьиОтчетаОПрибыляхИУбытках'], function () 
{
	Ext.define('Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:324px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи отчета о прибылях и убытках',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодДляОтчета',
			width: 81,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:81px;height:19px;',
		},
		{
			id: 'ОтборСтатейОборотов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:164px;width:308px;height:139px;',
			height: 139,width: 308,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'241',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Знак',
					width:'34',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СтатьиОтчетаОПрибыляхИУбытках").data,
					fields: ['НомерСтроки','СтатьяОборотов','Знак',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Статьи оборотов',
			style: 'position:absolute;left:8px;top:124px;width:308px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:140px;width:308px;height:24px;',
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
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:38px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:38px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:324px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:324px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
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
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});