Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:392px;height:459px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение способа отражения расходов по амортизации НМА',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:392px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
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
			style: 'position:absolute;left:0px;top:434px;width:392px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:383px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:383px;width:286px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:407px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:407px;width:286px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:81px;width:286px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:194px;width:376px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:218px;width:376px;height:160px;',
			height: 160,width: 376,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'61',
				},
				{
					text:'Нематериальный актив',
					width:'267',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать в:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:180px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовБУ',
			style: 'position:absolute;left:120px;top:129px;width:264px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходовБУ',
			text: 'Способ (бух. учет):',
			style: 'position:absolute;left:8px;top:129px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:98px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовНУ',
			style: 'position:absolute;left:120px;top:152px;width:264px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходовНУ',
			text: 'Способ (налог. учет):',
			style: 'position:absolute;left:8px;top:152px;width:109px;height:19px;text-align:left;',
		},
	]
});