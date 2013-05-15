Ext.define('Обработки.ПроверкаНастройкиВедущихВытесняющихВР.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:638px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проверка настройки списков ведущих и вытесняющих видов расчета',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:622px;height:327px;',
			height: 327,width: 622,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Начальная страница',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Проверка настройки списков ведущих и вытесняющих видов расчета',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:27px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:610px;height:60px;',
			height: 60,width: 610,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатПроверки',
			text: 'Надпись результат проверки',
			style: 'position:absolute;left:61px;top:6px;width:512px;height:48px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:33px;width:610px;height:7px;',
		},
					]
				},
				{
					title:'Обязательные к удалению',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:40px;width:316px;height:145px;',
			height: 145,width: 316,
			columns:
			[
				{
					text:'Вид расчет',
					width:'164',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'Вид расчета удалить',
					width:'150',
					dataIndex:'ВидРасчетаУдалить',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаНастройкиВедущихВытесняющихВР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидРасчетаУдалить',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовокОбязательныеКУдалению',
			text: 'Удаление циклических ссылок в списках вытесняющих видов расчета',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:27px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:33px;width:610px;height:7px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:191px;width:610px;height:130px;',
			height: 130,width: 610,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВРЦиклическаяССылка',
			text: 'Вид расчета: "Районный коэффициент"',
			style: 'position:absolute;left:6px;top:6px;width:597px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Переключатель1',
			style: 'position:absolute;left:11px;top:21px;width:563px;height:37px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Переключатель2',
			style: 'position:absolute;left:11px;top:58px;width:563px;height:65px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Порядок исправления ошибок:\r\n- в левом списке выберите вид расчета; \r\n- выберите действие для исправления ошибки;\r\n- нажмите кнопку «Исправить».\r\nВыполните эти действия для всего списка.',
			style: 'position:absolute;left:337px;top:40px;width:279px;height:80px;',
		},
					]
				},
				{
					title:'Редактирование списка',
					items:
					[
		{
			xtype: 'label',
			name: 'ЗаголовокРедактированиеСписка',
			text: 'Исправление ошибок в списке вытесняющих расчетов',
			style: 'position:absolute;left:6px;top:6px;width:568px;height:27px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:33px;width:610px;height:7px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:43px;width:308px;height:130px;',
			height: 130,width: 308,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаНастройкиВедущихВытесняющихВР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Порядок исправления ошибок:\r\n- в левом списке выберите вид расчета; \r\n- выберите действие для исправления ошибки «удалить из списка…» или «добавить в список…»;\r\n- нажмите кнопку «Исправить».\r\nВыполните эти действия для всего списка «Виды расчет с ошибками настройки».\r\n',
			style: 'position:absolute;left:329px;top:43px;width:287px;height:130px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:179px;width:610px;height:142px;',
			height: 142,width: 610,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВариантДействия',
			text: 'Вид расчета: "Районный коэффициент"',
			style: 'position:absolute;left:6px;top:6px;width:597px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:43px;width:301px;height:91px;',
			height: 91,width: 301,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаНастройкиВедущихВытесняющихВР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:314px;top:43px;width:289px;height:91px;',
			height: 91,width: 289,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроверкаНастройкиВедущихВытесняющихВР/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'удалить из списка вытесняющих',
			style: 'position:absolute;left:10px;top:24px;width:202px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'добавить в список вытесняющих',
			style: 'position:absolute;left:317px;top:24px;width:200px;height:15px;',
		},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Сохранение настроек',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Проверка настройки списков ведущих и вытесняющих видов расчета',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:27px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:610px;height:60px;',
			height: 60,width: 610,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРезультатПроверки1',
			text: 'Ошибки в настройках исправлены. Необходимо записать результаты исправления.',
			style: 'position:absolute;left:60px;top:6px;width:510px;height:48px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:6px;top:33px;width:610px;height:7px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаИсправитьОшибки',
			text: 'Записать исправления',
			style: 'position:absolute;left:355px;top:336px;width:130px;height:32px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:495px;top:336px;width:130px;height:32px;',
		},
	],
	dockedItems:
	[
	]
});