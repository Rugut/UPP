Ext.define('Справочники.КлючевыеРесурсыПредприятия.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:430px;height:182px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключевые ресурсы предприятия',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:315px;top:58px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:58px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазоваяЕдиницаИзмерения',
			text: 'Базовая единица измерения:',
			style: 'position:absolute;left:8px;top:106px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазоваяЕдиницаИзмерения',
			style: 'position:absolute;left:164px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазаЗаданияПотребности',
			text: 'База задания потребности:',
			style: 'position:absolute;left:8px;top:130px;width:154px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазаЗаданияПотребности',
			style: 'position:absolute;left:164px;top:130px;width:258px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:430px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});