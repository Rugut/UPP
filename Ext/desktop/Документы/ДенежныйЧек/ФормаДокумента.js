Ext.define('Документы.ДенежныйЧек.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:663px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Денежный чек',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:57px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:102px;top:81px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Касса:',
			style: 'position:absolute;left:341px;top:81px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:435px;top:81px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Сумма по чеку:',
			style: 'position:absolute;left:8px;top:105px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:102px;top:105px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:129px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:129px;width:219px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:169px;width:647px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:193px;width:647px;height:100px;',
			height: 100,width: 647,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Ведомость',
					width:'290',
				},
				{
					text:'Сумма',
					width:'122',
				},
				{
					text:'Статья движения денежных средств',
					width:'202',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:663px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:663px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:184px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:119px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено:',
			style: 'position:absolute;left:341px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:435px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоЗП',
			text: 'Итого на выплату заработной платы: 15000 руб',
			style: 'position:absolute;left:8px;top:298px;width:364px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Руб',
			style: 'position:absolute;left:224px;top:105px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:341px;top:105px;width:92px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:435px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:318px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:318px;width:568px;height:19px;',
		},
	]
});