Ext.define('Документы.УвольнениеИзОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:565px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Увольнение из организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Открыть категории',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Редактировать номер',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:412px;width:461px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:549px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:549px;height:220px;',
			height: 220,width: 549,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Дата увольнения',
					width:'160',
				},
				{
					text:'Статья ТК РФ',
					width:'80',
				},
				{
					text:'Основание',
					width:'80',
				},
				{
					text:'Прекращать стандартные вычеты',
					width:'115',
				},
				{
					text:'Компенсация',
					width:'100',
				},
				{
					text:'Порядок расчета',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Рабочий год',
					width:'80',
				},
				{
					text:'по',
					width:'80',
				},
				{
					text:'Сторно',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:438px;width:297px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:374px;width:314px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:374px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:428px;top:374px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:268px;height:25px;',
			items:
			[
				'-',
				{
					text:'Строки нескольких сотрудников',
				},
				{
					text:'Строки текущего сотрудника',
				},
				'-',
				{
					text:'Весь документ',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:72px;top:269px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие12',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
			]
		},
	]
});