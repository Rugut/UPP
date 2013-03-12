Ext.define('Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение параметров начисления амортизации ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:154px;width:654px;height:24px;',
			items:
			[
				{
					text:'По наименованию',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:179px;width:654px;height:159px;',
			height: 159,width: 654,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'200',
				},
				{
					text:'Инв. №',
					width:'100',
				},
				{
					text:'Срок использ. (УУ)',
					width:'120',
				},
				{
					text:'Срок для аморт. (УУ)',
					width:'100',
				},
				{
					text:'Объем работ (УУ)',
					width:'124',
				},
				{
					text:'Объем работ для аморт. (УУ)',
					width:'76',
				},
				{
					text:'Стоимость для вычисления аморт. (УУ)',
					width:'116',
				},
				{
					text:'% год. аморт. (УУ)',
					width:'116',
				},
				{
					text:'Коэф. ускорения (УУ)',
					width:'116',
				},
				{
					text:'Срок использ. (БУ)',
					width:'118',
				},
				{
					text:'Срок для аморт. (БУ)',
					width:'98',
				},
				{
					text:'Объем работ (БУ)',
					width:'98',
				},
				{
					text:'Объем работ для аморт. (БУ)',
					width:'98',
				},
				{
					text:'Стоимость для вычисления аморт. (БУ)',
					width:'116',
				},
				{
					text:'% год. аморт. (БУ)',
					width:'116',
				},
				{
					text:'Коэф. ускорения (БУ)',
					width:'116',
				},
				{
					text:'Срок использ. (НУ)',
					width:'113',
				},
				{
					text:'Изменить начисление по базовой ст. (НУ)',
					width:'221',
				},
				{
					text:'Начислять по базовой ст. (НУ)',
					width:'147',
				},
				{
					text:'Накопленная амортизация (НУ)',
					width:'202',
				},
				{
					text:'Накопленный фактический срок (НУ)',
					width:'202',
				},
				{
					text:'Постоянные разницы для вычисления амортизации',
					width:'144',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:671px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:343px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:343px;width:570px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:422px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:496px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять параметры в текущем месяце',
			style: 'position:absolute;left:336px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:83px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:92px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие регл.:',
			style: 'position:absolute;left:8px;top:108px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:92px;top:108px;width:220px;height:19px;',
		},
	]
});