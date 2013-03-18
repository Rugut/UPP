Ext.define('Отчеты.МСФОДвижениеКапитала.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:276px;height:269px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет об изменениях в капитале по МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:244px;width:276px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:42px;top:124px;width:180px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:20px;top:124px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:224px;top:124px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНормативДок',
			text: '',
			style: 'position:absolute;left:14px;top:173px;width:254px;height:40px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Годовая отчетность',
			style: 'position:absolute;left:8px;top:76px;width:124px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Промежуточная отчетность',
			style: 'position:absolute;left:8px;top:98px;width:164px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:8px;top:27px;width:260px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:8px;top:217px;width:100px;height:19px;',
		},
	]
});