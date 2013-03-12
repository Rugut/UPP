Ext.define('Документы.ИзменениеСпециальногоКоэффициентаОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:589px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения специального коэффициента для расчета амортизации ОС (налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:573px;height:380px;',
			height: 380,width: 573,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'131',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'143',
				},
				{
					text:'Ответственный',
					width:'144',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:589px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
	]
});