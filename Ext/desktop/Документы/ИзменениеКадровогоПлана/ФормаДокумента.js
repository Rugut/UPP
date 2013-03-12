Ext.define('Документы.ИзменениеКадровогоПлана.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:549px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение кадрового плана',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:533px;height:24px;',
			items:
			[
				{
					text:'По расхождениям',
				},
				{
					text:'&Скопировать',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'По текущему состоянию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:533px;height:220px;',
			height: 220,width: 533,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Должность',
					width:'93',
				},
				{
					text:'Количество',
					width:'64',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:173px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:93px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:193px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:549px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:371px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:93px;top:371px;width:448px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:549px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:347px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:347px;width:448px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменений',
			style: 'position:absolute;left:421px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Дата изменений:',
			style: 'position:absolute;left:331px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:533px;height:25px;',
			height: 25,width: 533,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:85px;top:0px;width:448px;height:19px;',
		},
					]
				},
			]
		},
	]
});