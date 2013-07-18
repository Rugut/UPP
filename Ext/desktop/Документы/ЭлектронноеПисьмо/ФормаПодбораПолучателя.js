Ext.require(['Данные.Документы.ЭлектронноеПисьмо'], function () 
{
	Ext.define('Документы.ЭлектронноеПисьмо.ФормаПодбораПолучателя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:448px;height:299px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проверка и выбор получателей/отправителей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:104px;width:432px;height:162px;',
			height: 162,width: 432,
			columns:
			[
				{
					text:'Объект',
					width:'275',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-mail',
					width:'103',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭлектронноеПисьмо/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Объект',
					},
					{
						name:'АдресЭлектроннойПочты',
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
						var грид = Ext.getCmp('ТаблицаОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЭлектронноеПисьмо.ФормаПодбораПолучателяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭлектронноеПисьмо.ФормаПодбораПолучателяСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтрокаДляНераспознанногоИмени',
			text: 'Строка для нераспознанного имени',
			style: 'position:absolute;left:8px;top:8px;width:432px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНераспознанногоИмени',
			text: 'Нераспознанное имя',
			style: 'position:absolute;left:8px;top:28px;width:432px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДействияПользователя',
			text: 'Подсказка действий пользователя',
			style: 'position:absolute;left:8px;top:48px;width:432px;height:27px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:448px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Пропустить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:80px;width:432px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Зарегистрировать новый',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подобрать из адресной книги (F12)',
				},
				'-',
			]
		},
	]
	});
});