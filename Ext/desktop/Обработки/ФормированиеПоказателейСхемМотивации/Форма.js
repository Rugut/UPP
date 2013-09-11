Ext.require(['Данные.Обработки.ФормированиеПоказателейСхемМотивации'], function () 
{
	Ext.define('Обработки.ФормированиеПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:402px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Формирование показателей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:25px;',
			width: 402,
			height: 25,
			items:
			[
				'-',
				{
					text:'Восстановить значения',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения',
					tooltip:'Сохранить значения',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:33px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:116px;width:388px;height:24px;',
			width: 388,
			height: 24,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:8px;top:100px;width:388px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Отбор',
			style: 'position:absolute;left:8px;top:56px;width:388px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ПоказателиОтчета',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:388px;height:147px;',
			height: 147,width: 388,
			columns:
			[
				{
					text:'Использование показателя',
					width:'25',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Представление показателя',
					width:'175',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеПоказателейСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИспользованиеПоказателя',
					},
					{
						name:'ПредставлениеПоказателя',
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
						var грид = Ext.getCmp('ПоказателиОтчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеПоказателейСхемМотивации.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеПоказателейСхемМотивации.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МесяцСтрока',
			width: 160,
			height: 19,
			style: 'position:absolute;left:91px;top:33px;width:160px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Менеджер:',
			style: 'position:absolute;left:8px;top:74px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиМенеджер',
			width: 206,
			height: 19,
			style: 'position:absolute;left:190px;top:74px;width:206px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:91px;top:74px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:402px;height:25px;',
			width: 402,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать показатели',
					tooltip:'1c9ebd9-28d1-4bc8-a9b5-365e7721812',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});