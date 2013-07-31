Ext.require(['Данные.Обработки.ПолучениеПочты'], function () 
{
	Ext.define('Обработки.ПолучениеПочты.ФормаПисьма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПолучениеПочты.ФормаПисьмаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПолучениеПочты.ФормаПисьмаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			xtype: 'fieldset',
			title: 'Вложенные файлы',
			style: 'position:absolute;left:8px;top:270px;width:480px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:286px;width:480px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Открыть',
				},
				{
					text:'Сохранить на диске',
				},
					]
				},
				'-',
				{
					text:'Открыть',
				},
				{
					text:'Сохранить на диске',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКИ',
			text: 'Добавить контактную информацию',
			style: 'position:absolute;left:118px;top:32px;width:200px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:418px;width:496px;height:25px;',
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
		],
	}],
	dockedItems:
	[
	]
	});
});