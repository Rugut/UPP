Ext.define('Обработки.ПоказНамеченныхСобытийПоПерсоналу.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:541px;height:374px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Запланированные кадровые перестановки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:91px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:173px;top:8px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:191px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:525px;height:261px;',
			height: 261,width: 525,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'160',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'109',
				},
				{
					text:'Должность',
					width:'91',
				},
				{
					text:'График работы',
					width:'42',
				},
				{
					text:'Ставка',
					width:'40',
				},
				{
					text:'Занимать',
					width:'46',
				},
				{
					text:'Планируемое событие',
					width:'124',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:273px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:56px;width:525px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Снять',
				},
				'-',
				'-',
				{
					text:'Снять',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Установить',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Установить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:541px;height:25px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Создать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:91px;top:32px;width:442px;height:19px;',
		},
	]
});