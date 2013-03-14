Ext.define('Обработки.Планирование.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:790px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:890px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:972px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлановыйПериодС',
			text: 'Плановый период с:',
			style: 'position:absolute;left:678px;top:2px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:872px;top:2px;width:16px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:539px;',
			height: 539,width: 984,
			items:
			[
				{
					title:'Планы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:230px;height:467px;',
			height: 467,width: 230,
			columns:
			[
				{
					text:' План',
					width:'100',
				},
				{
					text:' Подразделение',
					width:'100',
				},
				{
					text:' Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:46px;width:734px;height:189px;',
			height: 189,width: 734,
			columns:
			[
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Источники обеспечения',
					width:'100',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Контрагент',
					width:'200',
				},
				{
					text:'Договор',
					width:'200',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Вариант распределения',
					width:'200',
				},
				{
					text:'Источник',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:22px;width:734px;height:24px;',
			items:
			[
				{
					text:'Редактировать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериодичность',
			style: 'position:absolute;left:882px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:281px;width:734px;height:232px;',
			height: 232,width: 734,
			columns:
			[
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Мин. партия',
					width:'68',
				},
				{
					text:'Кратность',
					width:'68',
				},
				{
					text:'Вид воспр.',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Подразделение',
					width:'200',
				},
				{
					text:'Рабочий центр',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:257px;width:734px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:230px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'Обновить',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Производственная программа',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:970px;height:507px;',
			height: 507,width: 970,
			items:
			[
				{
					title:'Плановые задания',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:956px;height:24px;',
			items:
			[
				{
					text:'(История отборов)',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:956px;height:451px;',
			height: 451,width: 956,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'200',
				},
				{
					text:'Рабочий центр',
					width:'200',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Точка маршрута',
					width:'100',
				},
				{
					text:'Источник',
					width:'200',
				},
				{
					text:'Вид воспроизводства',
					width:'200',
				},
				{
					text:'Вариант распределения',
					width:'135',
				},
			]
		},
					]
				},
				{
					title:'Диаграмма Ганта',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:956px;height:24px;',
			items:
			[
				{
					text:'Свернуть все',
				},
				{
					text:'Развернуть все',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗагрузкаОписание',
			text: '- загрузка',
			style: 'position:absolute;left:38px;top:462px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикОписание',
			text: '- график',
			style: 'position:absolute;left:150px;top:462px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПревышениеЗагрузкиОписание',
			text: '- превышение загрузки',
			style: 'position:absolute;left:252px;top:462px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗагрузка',
			text: '',
			style: 'position:absolute;left:6px;top:461px;width:30px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафик',
			text: '',
			style: 'position:absolute;left:118px;top:461px;width:30px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПревышениеЗагрузки',
			text: '',
			style: 'position:absolute;left:220px;top:461px;width:30px;height:20px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСценарий',
			style: 'position:absolute;left:458px;top:2px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:401px;top:2px;width:55px;height:19px;',
		},
	]
});