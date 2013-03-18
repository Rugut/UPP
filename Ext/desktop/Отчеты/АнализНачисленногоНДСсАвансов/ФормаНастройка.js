Ext.define('Отчеты.АнализНачисленногоНДСсАвансов.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:312px;height:233px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Анализ начисленного НДС с авансов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:208px;width:312px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:35px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:35px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Авансы по обычным ставкам НДС ',
			style: 'position:absolute;left:8px;top:134px;width:296px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Авансы по ставке НДС 0%',
			style: 'position:absolute;left:8px;top:157px;width:296px;height:18px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Авансы по всем ставкам НДС ',
			style: 'position:absolute;left:8px;top:180px;width:296px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:86px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:8px;top:110px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:84px;top:86px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Договор',
			style: 'position:absolute;left:84px;top:110px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать только сводные итоги ',
			style: 'position:absolute;left:8px;top:61px;width:296px;height:19px;',
		},
	]
});