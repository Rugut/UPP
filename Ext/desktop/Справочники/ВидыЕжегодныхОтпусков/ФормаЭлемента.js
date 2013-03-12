Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:183px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вид ежегодного отпуска',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:350px;top:33px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:382px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Редактировать код',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:158px;width:470px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоДнейОтпускаВГод',
			text: 'количество дней отпуска в год:',
			style: 'position:absolute;left:254px;top:131px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейОтпускаВГод',
			style: 'position:absolute;left:419px;top:131px;width:43px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предоставлять отпуск всем сотрудникам',
			style: 'position:absolute;left:8px;top:131px;width:232px;height:19px;',
		},
	]
});