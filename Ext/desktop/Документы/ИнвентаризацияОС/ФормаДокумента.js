Ext.define('Документы.ИнвентаризацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:454px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:404px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:110px;top:404px;width:549px;height:19px;',
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
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:337px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:438px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:664px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:650px;height:315px;',
			height: 315,width: 650,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:637px;height:24px;',
			items:
			[
				{
					text:'По остаткам',
				},
				{
					text:'Фактические данные',
				},
				'-',
				{
					text:'Данные учета',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:637px;height:265px;',
			height: 265,width: 637,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'220',
				},
				{
					text:'Инв. №',
					width:'80',
				},
				{
					text:'МОЛ',
					width:'120',
				},
				{
					text:'Стоимость по данным учета',
					width:'120',
				},
				{
					text:'Наличие по данным учета',
					width:'120',
				},
				{
					text:'Фактическая стоимость',
					width:'120',
				},
				{
					text:'Фактическое наличие',
					width:'120',
				},
				{
					text:'Излишек, сумма',
					width:'120',
				},
				{
					text:'Излишек, количество',
					width:'120',
				},
				{
					text:'Недостача, сумма',
					width:'120',
				},
				{
					text:'Недостача, количество',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:270px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:270px;width:543px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:141px;width:637px;height:123px;',
			height: 123,width: 637,
			columns:
			[
				{
					text:'№',
					width:'25',
				},
				{
					text:'Члены комиссии',
					width:'123',
				},
				{
					text:'Председатель',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:117px;width:637px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеВид',
			style: 'position:absolute;left:89px;top:27px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеДата',
			style: 'position:absolute;left:229px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНомер',
			style: 'position:absolute;left:89px;top:51px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеВид',
			text: 'Документ:',
			style: 'position:absolute;left:12px;top:27px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Номер:',
			style: 'position:absolute;left:12px;top:51px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаИнвентаризации',
			text: 'Дата начала:',
			style: 'position:absolute;left:328px;top:27px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаИнвентаризации',
			style: 'position:absolute;left:429px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияИнвентаризации',
			style: 'position:absolute;left:429px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаИнвентаризации',
			text: 'Причина:',
			style: 'position:absolute;left:12px;top:75px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаИнвентаризации',
			style: 'position:absolute;left:89px;top:75px;width:554px;height:19px;',
		},
					]
				},
			]
		},
	]
});