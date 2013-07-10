Ext.define('Обработки.КалендарныйПланЗакупок.ФормаНастройкиСоответствийЗаказовПокупателейИПоставщиков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник настройки соответствий заказов покупателей и заказов поставщикам',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоСоответствияЗаказов',
			xtype: 'grid',
			style: 'position:absolute;left:151px;top:33px;width:621px;height:364px;',
			height: 364,width: 621,
			columns:
			[
				{
					text:'Номенклатура/Дата потребности/Заказ покупателя/Заказ поставщику',
					width:'3800',
					dataIndex:'ОсновныеДанные',
					flex:1,
				},
				{
					text:'Заказчик/Поставщик',
					width:'1200',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Количество потребности',
					width:'1200',
					dataIndex:'КоличествоПотребности',
					flex:1,
				},
				{
					text:'Количество заказов',
					width:'1200',
					dataIndex:'КоличествоЗаказов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарныйПланЗакупок/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ОсновныеДанные',
					},
					{
						name:'Контрагент',
					},
					{
						name:'КоличествоПотребности',
					},
					{
						name:'КоличествоЗаказов',
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
						var грид = Ext.getCmp('ДеревоСоответствияЗаказов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьУровеньРазворотаДерева',
			text: 'Уровень разворота дерева:',
			style: 'position:absolute;left:446px;top:12px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:592px;top:12px;width:180px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:151px;top:9px;width:270px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:138px;height:388px;',
			height: 388,width: 138,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:780px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});