Ext.define('Документы.ИзменениеСостоянияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:662px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение состояния ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:56px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:357px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:357px;width:564px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:90px;top:79px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:422px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:498px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Влияет на начисление амортизации',
			style: 'position:absolute;left:336px;top:105px;width:202px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:336px;top:125px;width:144px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию в текущем месяце',
			style: 'position:absolute;left:336px;top:145px;width:242px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:182px;width:646px;height:24px;',
			items:
			[
				'-',
				{
					text:'По наименованию',
				},
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:206px;width:646px;height:146px;',
			height: 146,width: 646,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Инв. №',
					width:'72',
				},
				{
					text:'Основное средство',
					width:'188',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:25px;',
			items:
			[
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
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:662px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
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
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:574px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:336px;top:79px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:422px;top:79px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Событие регл:',
			style: 'position:absolute;left:8px;top:102px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:90px;top:102px;width:220px;height:19px;',
		},
	]
});