Ext.define('Документы.ПланированиеОбучения.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:424px;height:338px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование обучения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:286px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:286px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:262px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:262px;width:320px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:408px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Распределить на период',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:408px;height:160px;',
			height: 160,width: 408,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Курс обучения',
					width:'220',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Окончание курса',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:424px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:424px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});