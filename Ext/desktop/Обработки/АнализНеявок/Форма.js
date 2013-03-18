Ext.define('Обработки.АнализНеявок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:619px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ неявок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:118px;width:603px;height:214px;',
			height: 214,width: 603,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'87',
				},
				{
					text:'Неявка',
					width:'95',
				},
				{
					text:'Кадровый документ',
					width:'105',
				},
				{
					text:'Расчетный документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:6px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:6px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:304px;top:6px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:391px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:99px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:182px;top:30px;width:15px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:198px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:281px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:94px;width:603px;height:24px;',
			items:
			[
				{
					text:'Состояния сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:619px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'За период с:',
			style: 'position:absolute;left:8px;top:30px;width:90px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По документу:',
			style: 'position:absolute;left:8px;top:54px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КадровыйДокумент',
			style: 'position:absolute;left:304px;top:54px;width:307px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДокумента',
			style: 'position:absolute;left:99px;top:54px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:361px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:361px;width:133px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Создать',
			text: 'Создать документы',
			style: 'position:absolute;left:252px;top:361px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:379px;top:361px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Провести',
			text: 'Провести',
			style: 'position:absolute;left:466px;top:361px;width:80px;height:19px;',
		},
	]
});