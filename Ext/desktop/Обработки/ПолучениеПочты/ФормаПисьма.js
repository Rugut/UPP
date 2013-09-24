Ext.require(['Данные.Обработки.ПолучениеПочты'], function () 
{
	Ext.define('Обработки.ПолучениеПочты.ФормаПисьма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Содержание письма',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекстТемы',
			width: 438,
			height: 19,
			style: 'position:absolute;left:50px;top:60px;width:438px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:8px;top:84px;width:480px;height:180px;',
		},
		{
			xtype: 'label',
			name: 'ПодписьТема',
			text: 'Тема:',
			style: 'position:absolute;left:8px;top:60px;width:40px;height:19px;',
		},
		{
			id: 'ФайлыПисьма',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:310px;width:480px;height:100px;',
			height: 100,width: 480,
			columns:
			[
				{
					text:'Файл',
					width:'526',
					dataIndex:'Файл',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПолучениеПочты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Файл',
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
						var грид = Ext.getCmp('ФайлыПисьма');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПолучениеПочты.ФормаПисьмаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПолучениеПочты.ФормаПисьмаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ПодписьАдресОтправителя',
			text: 'Адрес отправителя:',
			style: 'position:absolute;left:8px;top:8px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресОтправителя',
			width: 370,
			height: 19,
			style: 'position:absolute;left:118px;top:8px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПодписьОтправитель',
			text: 'Отправитель:',
			style: 'position:absolute;left:8px;top:32px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отправитель',
			width: 370,
			height: 19,
			style: 'position:absolute;left:118px;top:32px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Вложенные файлы',
			style: 'position:absolute;left:8px;top:270px;width:480px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:286px;width:480px;height:24px;',
			width: 480,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Открыть',
					tooltip:'Открыть выделенные файлы',
				},
				{
					text:'Сохранить на диске',
					tooltip:'Сохранить выделенные файлы на диске',
				},
					]
				},
				'-',
				{
					text:'Открыть',
					tooltip:'Открыть выделенные файлы',
				},
				{
					text:'Сохранить на диске',
					tooltip:'Сохранить выделенные файлы на диске',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКИ',
			text: 'Добавить контактную информацию',
			style: 'position:absolute;left:118px;top:32px;width:200px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:418px;width:496px;height:25px;',
			width: 496,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});