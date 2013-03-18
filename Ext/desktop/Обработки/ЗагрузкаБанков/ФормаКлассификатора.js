Ext.define('Обработки.ЗагрузкаБанков.ФормаКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:479px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка ""Классификатора банков РФ""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:479px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
				},
				'-',
				{
					text:'Далее',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:463px;height:331px;',
			height: 331,width: 463,
			items:
			[
				{
					title:'Выбор источника',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'с диска "Информационно-технологическое сопровождение"',
			style: 'position:absolute;left:6px;top:31px;width:330px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'с сайта агентства "РосБизнесКонсалтинг"',
			style: 'position:absolute;left:6px;top:51px;width:240px;height:15px;',
		},
					]
				},
				{
					title:'Классификатор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:449px;height:258px;',
			height: 258,width: 449,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Коды: ОКАТО / БИК',
					width:'93',
				},
				{
					text:'Наименование',
					width:'207',
				},
				{
					text:'Тип банка',
					width:'100',
				},
				{
					text:'Корр. счет',
					width:'100',
				},
				{
					text:'Индекс',
					width:'100',
				},
				{
					text:'Город',
					width:'100',
				},
				{
					text:'Адрес',
					width:'100',
				},
				{
					text:'Телефон',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДопРеквизитов',
			text: 'Надпись',
			style: 'position:absolute;left:6px;top:290px;width:449px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:449px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
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
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Свернуть все',
				},
				{
					text:'Развернуть все',
				},
			]
		},
					]
				},
				{
					title:'Конфликты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:449px;height:211px;',
			height: 211,width: 449,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'',
					width:'31',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Классификатор',
					width:'120',
				},
				{
					text:'База',
					width:'120',
				},
				{
					text:'',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКонфликты',
			text: 'Список банков, уже имеющихся в базе, но отличающихся от классификатора некоторыми параметрами. 
Пометьте те банки, изменения для которых необходимо принять.',
			style: 'position:absolute;left:6px;top:6px;width:449px;height:43px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:449px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
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
					text:'Пометить',
				},
				{
					text:'Снять пометки',
				},
			]
		},
					]
				},
			]
		},
	]
});