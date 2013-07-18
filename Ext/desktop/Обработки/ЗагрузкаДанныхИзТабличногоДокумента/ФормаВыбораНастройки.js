Ext.require(['Данные.Обработки.ЗагрузкаДанныхИзТабличногоДокумента'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:411px;height:241px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:329px;top:27px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:329px;top:51px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:329px;top:75px;width:74px;height:19px;',
		},
		{
			id: 'СписокНастроек',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:316px;height:225px;',
			height: 225,width: 316,
			columns:
			[
				{
					text:'Колонка1',
					width:'100',
					dataIndex:'Колонка1',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхИзТабличногоДокумента/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Колонка1',
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
						var грид = Ext.getCmp('СписокНастроек');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});