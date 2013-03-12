Ext.define('Документы.ВводСведенийОРеглУчетеПлановыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:366px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод сведений о регламентированном учете плановых начислений сотрудников организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:89px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:169px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:89px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:329px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:314px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:314px;width:546px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:329px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:627px;height:24px;',
			items:
			[
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие10',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:627px;height:184px;',
			height: 184,width: 627,
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
					width:'97',
				},
				{
					text:'Начисление',
					width:'116',
				},
				{
					text:'Дата',
					width:'84',
				},
				{
					text:'Отражение в бухучете',
					width:'120',
				},
				{
					text:'Отражение в ЕСН',
					width:'120',
				},
				{
					text:'Отнесение расходов к деятельности ЕНВД',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Ввод сведений о плановых начислениях сотрудников организаций',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Списком сотрудников',
				},
				{
					text:'Прием на работу в организацию',
				},
				'-',
				{
					text:'Кадровое перемещение организаций',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:643px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
			]
		},
	]
});