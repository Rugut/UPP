Ext.define('Обработки.КадровоеПланирование.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кадровое планирование',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:944px;height:25px;',
			items:
			[
				'-',
				{
					text:'Штатное расписание...',
				},
				'-',
				{
					text:'Штатное расписание...',
				},
				{
					text:'Состояние кадрового плана',
				},
				{
					text:'Действие',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Состояние кадрового плана',
				},
				'-',
				{
					text:'Коэффициент текучести кадров',
				},
				'-',
				'-',
				{
					text:'Набор персонала...',
				},
				'-',
				{
					text:'Коэффициент текучести кадров',
				},
				{
					text:'Исполнение кадрового плана',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Набор персонала...',
				},
				{
					text:'Исполнение кадрового плана',
				},
				{
					text:'Оценка эффективности работы ОУП',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:255px;width:200px;height:284px;',
			height: 284,width: 200,
			items:
			[
				{
					title:'Подразделения организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:32px;width:200px;height:252px;',
			height: 252,width: 200,
			columns:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:31px;',
			height: 31,width: 200,
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
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:79px;top:6px;width:115px;height:19px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:255px;width:558px;height:147px;',
			height: 147,width: 558,
			columns:
			[
				{
					text:'Период',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Должность',
					width:'120',
				},
				{
					text:'Количество ставок',
					width:'50',
				},
				{
					text:'Занято ставок',
					width:'50',
				},
				{
					text:'Вакантно',
					width:'50',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:764px;height:24px;',
			items:
			[
				{
					text:'Текущее состояние',
				},
				'-',
				'-',
				{
					text:'История всех изменений',
				},
				{
					text:'Добавить вакансию',
				},
				{
					text:'Изменить кадровый план',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредприятие',
			text: ' Предприятие',
			style: 'position:absolute;left:0px;top:199px;width:764px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:764px;height:169px;',
			height: 169,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:764px;height:137px;',
			height: 137,width: 764,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Наименование',
					width:'189',
				},
				{
					text:'Подразделение',
					width:'166',
				},
				{
					text:'Должность',
					width:'140',
				},
				{
					text:'Заявитель',
					width:'137',
				},
				{
					text:'Ответственный за вакансию',
					width:'151',
				},
				{
					text:'Закрыть до',
					width:'94',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Закрыть',
				},
				{
					text:'По должности',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'По наименованию',
				},
				{
					text:'Показывать только открытые',
				},
				{
					text:'По подразделению',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Показывать все',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'По дате закрытия',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:558px;top:224px;width:206px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:206px;top:437px;width:558px;height:102px;',
			height: 102,width: 558,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Номер',
					width:'77',
				},
				{
					text:'Дата изменений',
					width:'105',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:571px;top:408px;width:193px;height:24px;',
			items:
			[
				{
					text:'Новый документ',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:854px;top:0px;width:146px;height:25px;',
			items:
			[
				{
					text:'Переключение справки формы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:778px;top:33px;width:214px;height:539px;',
			height: 539,width: 214,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});