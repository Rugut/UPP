Ext.require(['Данные.Обработки.ВводРегламентированныхКадровыхДокументовНаОсновании'], function () 
{
	Ext.define('Обработки.ВводРегламентированныхКадровыхДокументовНаОсновании.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод на основании',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:4px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснование',
			width: 319,
			height: 19,
			style: 'position:absolute;left:73px;top:4px;width:319px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:28px;width:384px;height:24px;',
			width: 384,
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
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить',
				},
			]
		},
		{
			id: 'ВводНаОсновании',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:52px;width:384px;height:177px;',
			height: 177,width: 384,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Отметка',
					flex:1,
				},
				{
					text:'Организация',
					width:'210',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводРегламентированныхКадровыхДокументовНаОсновании/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Отметка',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ВводНаОсновании');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводРегламентированныхКадровыхДокументовНаОсновании.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводРегламентированныхКадровыхДокументовНаОсновании.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});