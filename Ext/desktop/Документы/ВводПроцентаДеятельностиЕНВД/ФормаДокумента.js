Ext.define('Документы.ВводПроцентаДеятельностиЕНВД.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод процента деятельности ЕНВД',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:161px;width:634px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
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
				'-',
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Списком сотрудников',
				},
				'-',
				'-',
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:650px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:410px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:410px;width:550px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:126px;top:101px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:185px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'157',
				},
				{
					text:'Месяц регистрации',
					width:'90',
				},
				{
					text:'% ЕНВД-деятельности ',
					width:'64',
				},
				{
					text:'Счет Дт',
					width:'80',
				},
				{
					text:'Субконто',
					width:'120',
				},
				{
					text:'Субконто2',
					width:'100',
				},
				{
					text:'Субконто3',
					width:'100',
				},
				{
					text:'Способ распределения затрат',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:58px;width:84px;height:19px;',
		},
	]
});