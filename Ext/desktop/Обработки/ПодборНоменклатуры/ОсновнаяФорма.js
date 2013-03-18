Ext.define('Обработки.ПодборНоменклатуры.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор',
	
	items:
	[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:70px;top:8px;width:281px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:376px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Подбор:',
			style: 'position:absolute;left:8px;top:8px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:395px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:109px;top:395px;width:49px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:418px;width:54px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:215px;width:447px;height:161px;',
			height: 161,width: 447,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По запросу',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:1px;width:447px;height:160px;',
			height: 160,width: 447,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'77',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Остаток организации',
					width:'60',
				},
				{
					text:'Свободный остаток',
					width:'60',
				},
				{
					text:'Заказано',
					width:'82',
				},
				{
					text:'Цена',
					width:'56',
				},
				{
					text:'Лимит',
					width:'56',
				},
				{
					text:'Единица измерения',
					width:'54',
				},
				{
					text:'Валюта',
					width:'80',
				},
				{
					text:'Наименование у контрагента',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'120',
				},
				{
					text:'Серия номенклатуры',
					width:'120',
				},
				{
					text:'Склад',
					width:'120',
				},
				{
					text:'Качество',
					width:'120',
				},
				{
					text:'Артикул у контрагента',
					width:'100',
				},
				{
					text:'Номенклатура (представление)',
					width:'79',
				},
				{
					text:'Характеристика номенклатуры (представление)',
					width:'48',
				},
				{
					text:'Серия номенклатуры (представление)',
					width:'53',
				},
				{
					text:'Единица измерения (представление)',
					width:'54',
				},
				{
					text:'Валюта (представление)',
					width:'60',
				},
				{
					text:'Склад (представление)',
					width:'60',
				},
				{
					text:'Качество (представление)',
					width:'60',
				},
				{
					text:'Запланировано',
					width:'71',
				},
				{
					text:'Заказано',
					width:'74',
				},
				{
					text:'Резерв',
					width:'78',
				},
				{
					text:'Осталось обеспечить',
					width:'85',
				},
				{
					text:'Заказ',
					width:'161',
				},
				{
					text:'Заказчик/Контрагент',
					width:'113',
				},
				{
					text:'Состояние заказа',
					width:'93',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:73px;top:75px;width:301px;height:25px;',
			items:
			[
				{
					text:'Пересчитывать остатки в единицу измерения цены',
				},
			]
		},
					]
				},
				{
					title:'По справочнику',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:55px;',
			height: 55,width: 447,
			columns:
			[
				{
					text:' ',
					width:'39',
				},
				{
					text:'Код',
					width:'68',
				},
				{
					text:'Артикул ',
					width:'58',
				},
				{
					text:'Номенклатура',
					width:'233',
				},
				{
					text:'Единица измерения',
					width:'41',
				},
				{
					text:'Свободный остаток',
					width:'62',
				},
				{
					text:'Остаток организации',
					width:'69',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:1px;top:66px;width:445px;height:95px;',
			height: 95,width: 445,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Остатки товаров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:108px;top:0px;width:337px;height:69px;',
			height: 69,width: 337,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'151',
				},
				{
					text:'Ячейка склада',
					width:'87',
				},
				{
					text:'Общий',
					width:'60',
				},
				{
					text:'Свободный',
					width:'71',
				},
				{
					text:'Своб.ожид.',
					width:'68',
				},
				{
					text:'В резерве',
					width:'75',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:101px;height:94px;',
			height: 94,width: 101,
			columns:
			[
				{
					text:'Типы цен',
					width:'133',
				},
				{
					text:'Ссылка',
					width:'82',
				},
				{
					text:'Базовый тип цен',
					width:'100',
				},
				{
					text:'Рассчитывается',
					width:'100',
				},
				{
					text:'Округлять в большую сторону',
					width:'100',
				},
				{
					text:'Процент скидки-наценки',
					width:'100',
				},
				{
					text:'Префикс',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:344px;top:73px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:298px;top:74px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:107px;top:74px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:178px;top:74px;width:116px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'По спецификациям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:161px;',
			height: 161,width: 447,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Версия',
					width:'60',
				},
				{
					text:'Наименование',
					width:'124',
				},
				{
					text:'Активная',
					width:'81',
				},
				{
					text:'Вид',
					width:'78',
				},
				{
					text:'Состояние',
					width:'108',
				},
				{
					text:'Дата утверждения',
					width:'108',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчетов',
			style: 'position:absolute;left:336px;top:414px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасчетов',
			text: 'Остатки и цены на:',
			style: 'position:absolute;left:234px;top:414px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоиск',
			text: 'Искать по:',
			style: 'position:absolute;left:8px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:70px;top:57px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПоиска',
			style: 'position:absolute;left:193px;top:57px;width:262px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:109px;top:418px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьПараметрыПодбора',
			text: 'Здесь будет отображаться информация о способе подбора',
			style: 'position:absolute;left:97px;top:79px;width:358px;height:24px;text-align:right;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:91px;top:79px;width:364px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:448px;height:102px;',
			height: 102,width: 448,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'БезИзображения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:106px;top:0px;width:342px;height:100px;',
			height: 100,width: 342,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:291px;top:19px;width:157px;height:24px;',
			items:
			[
				{
					text:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:100px;',
			height: 100,width: 100,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'Дерево спецификаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:448px;height:102px;',
			height: 102,width: 448,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:84px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изображение',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Номенклат.
группа:',
			style: 'position:absolute;left:8px;top:28px;width:60px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:70px;top:32px;width:385px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать остатки',
			style: 'position:absolute;left:322px;top:395px;width:134px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'кнСправка',
			text: '',
			style: 'position:absolute;left:355px;top:8px;width:18px;height:19px;',
		},
	]
});